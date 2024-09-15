import { DB_CONNECTION, DB_NAME } from "@/config/connections";
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: any) {
  const session = await MongoClient.connect(DB_CONNECTION);
  const db = session.db(DB_NAME);
  const collection = db.collection("Customers");
  const userToValidate = await collection.findOne({ email: req.body.username });
  if (userToValidate && userToValidate.password === req.body.password) {
    res.status(200).json({ result: userToValidate });
  } else {
    res.status(400).json({ result: null });
  }
}
