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

    const customer = await collection.findOne({ email: req.body.email });
    res.status(200).json({ result: customer });
  } catch (e) {
    console.error(e);
  }
}
