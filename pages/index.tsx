import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { FullScreenLoading } from "@/components/ui";
import { useProducts } from "@/hooks";
import { ProductInterface } from "@/interfaces";
import { Typography } from "@mui/material";

export default function Home() {
  const { products, isLoading } = useProducts("/products");

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

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
}
