import type { NextApiRequest, NextApiResponse } from "next";
import { ProductInterface } from "../../../interfaces/products";
import { db } from "../../../database";
import { Product } from "../../../models";

type Data = { message: string } | ProductInterface[];

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return getProductsByTitle(req, res);

    default:
      return res.status(400).json({ message: "Invalid method" });
  }
}

const getProductsByTitle = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  let { param = "" } = req.query;

  if (param.length === 0)
    return res
      .status(400)
      .json({ message: "Requiere un paramentro de busqueda" });

  try {
    await db.connect();
    const products = await Product.find({
      $text: { $search: `${param}` },
    }).select('title images inStock slug price -_id').lean();
    await db.disconnect();
    if (products.length === 0)
      return res.status(404).json({ message: "Producto no encontrado" });

    return res.status(200).json(products);

  } catch (error) {
    db.disconnect();
    console.log(error);
    return res.status(500).json({ message: "Ver la consola" });
  }
};
