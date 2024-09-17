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
        kyc: {
          personal: {
            name: req.body.name,
            lastname: req.body.lastname,
            identity: req.body.identity,
            bornDate: req.body.bornDate,
            phone: req.body.phone,
            country: req.body.country,
            city: req.body.city,
          },
        },
      },
    }
  );

  if (!updateUserProfile) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  res.json({
    message: "Información personal actualizada",
    usuario: updateUserProfile,
  });
}
