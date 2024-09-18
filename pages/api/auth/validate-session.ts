// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DB_CONNECTION, DB_NAME } from "@/config/connections";
import { verifyPassword } from "@/utils/passwords";
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  isValidate: boolean;
  user: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await MongoClient.connect(DB_CONNECTION);
  const db = session.db(DB_NAME);
  const collection = db.collection("Customers");
  const userToValidate = await collection.findOne({
    email: req.body.email,
  });
  const validatePassword = await verifyPassword(
    req.body.password,
    userToValidate?.password
  );

  res.status(200).json({ isValidate: validatePassword, user: userToValidate });
}
