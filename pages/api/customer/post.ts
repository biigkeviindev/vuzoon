// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DB_CONNECTION, DB_NAME } from "@/config/connections";
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: any) {
  try {
    const session = await MongoClient.connect(DB_CONNECTION);
    const db = session.db(DB_NAME);
    const collection = db.collection("Customers");

    const createUser = await collection.insertOne({
      id: uuidv4(),
      email: req.body.email,
      name: req.body.name,
      lastname: req.body.lastname,
      reffer: req.body.reffer,
      password: req.body.password,
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
