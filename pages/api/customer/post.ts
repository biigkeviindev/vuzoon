import { DB_CONNECTION, DB_NAME } from "@/config/connections";
import { encryptPassword } from "@/utils/passwords";
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req: NextApiRequest, res: any) {
  try {
    const session = await MongoClient.connect(DB_CONNECTION);
    const db = session.db(DB_NAME);
    const collection = db.collection("Customers");

    const userExist = await collection.findOne({ email: req.body.email });

    if (userExist) {
      return res.status(409).json({ message: "El email ya esta registrado" });
    }
    const passwordEncrypted = await encryptPassword(req.body.password);
    const createUser = await collection.insertOne({
      id: uuidv4(),
      email: req.body.email,
      name: req.body.name,
      lastname: req.body.lastname,
      reffer: req.body.reffer,
      password: passwordEncrypted,
      isVerified: false,
      isBegin: true,
      kyc: false,
      wallet: "",
    });

    res.status(200).json({ result: createUser });
  } catch (e) {
    console.error(e);
  }
}
