import { DB_CONNECTION, DB_NAME } from "@/config/connections";
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, name, lastname } = req.body;
  const session = await MongoClient.connect(DB_CONNECTION);
  const db = session.db(DB_NAME);
  const collection = db.collection("Customers");

  const updateUserProfile = await collection.findOneAndUpdate(
    {
      id: id,
    },
    {
      $set: {
        name,
        lastname,
      },
    }
  );

  if (!updateUserProfile) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  res.json({
    message: "Usuario actualizado correctamente",
    usuario: updateUserProfile,
  });
}
