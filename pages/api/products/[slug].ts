import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { ProductInterface } from "../../../interfaces";
import { Product } from "@/models";

type Data = { message: string } | ProductInterface[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getProductByslug(req, res);

    default:
      return res.status(400).json({ message: "Invalid method" });
  }
}

const getProductByslug = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { slug } = req.query;

  try {
    await db.connect();
    const products = await Product.find({ slug }).lean();
    await db.disconnect();

    if ((products.length === 0))
      return res.status(404).json({ message: "Producto no encontrado" });

    return res.status(200).json(products);
  } catch (error) {
    db.disconnect();
    console.log(error);
    return res.status(500).json({ message: "Ver la consola" });
  }
};
