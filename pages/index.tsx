import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { initialData } from "@/database/products";
import { ProductInterface } from "@/interfaces";
import { Typography } from "@mui/material";

export default function Home() {
  const products = initialData.products;
  return (
    <ShopLayout
      title="Branna-shop"
      pageDescription="Encuentra los mejores productos, al mejor precio"
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      <ProductList products={products as ProductInterface[]} />
    </ShopLayout>
  );
}
