import { DB_CONNECTION, DB_NAME } from "@/config/connections";
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: any) {
  const session = await MongoClient.connect(DB_CONNECTION);
  const db = session.db(DB_NAME);
  const collection = db.collection("assets");

  const assets = await collection.find().toArray();
  res.status(200).json({ result: assets, total: assets.length });
}
