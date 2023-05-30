import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { FullScreenLoading } from "@/components/ui";
import { useProducts } from "@/hooks";
import { Typography } from "@mui/material";
import React from "react";

const women = () => {
  const { products, isLoading } = useProducts("/products?gender=women");

  console.log(products);
  return (
    <ShopLayout
      title="Productos - mujer"
      pageDescription="Encuentra los mejores productos, para mujer"
    >
      <Typography variant="h1" component="h1">
        Mujeres
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos para mujer
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default women;
