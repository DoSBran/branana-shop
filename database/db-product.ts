import { db } from ".";
import { Product } from "@/models";
import { ProductInterface } from "@/interfaces";

export const dbProduct = async (
  slug: string
): Promise<ProductInterface | null> => {
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();

  if (!product) return null;

  return JSON.parse(JSON.stringify(product));
};

interface ProductSlug {
  slug: string;
}
export const getAllProductSlugs = async (): Promise<ProductSlug[]> => {
  await db.connect();
  const slugs = await Product.find().select("slug -_id").lean();
  await db.disconnect();

  return slugs;
};

export const getProductByTerms = async (term: string): Promise<ProductInterface[]> => {
  await db.connect();
  const products = await Product.find({ $text: { $search: term } })
    .select("title images price inStock slug -_id")
    .lean();
  await db.disconnect();

  return products;
};

export const getAllProducts = async(): Promise<ProductInterface[]> => {
  await db.connect();
  const products = await Product.find().select('title images price inStock slug -_id').lean();
  await db.disconnect();

  return products;
}
