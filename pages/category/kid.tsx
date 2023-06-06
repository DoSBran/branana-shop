import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { FullScreenLoading } from "@/components/ui";
import { useProducts } from "@/hooks";
import { Typography } from "@mui/material";
import React from "react";

const kid = () => {
  const { products, isLoading } = useProducts("/products?gender=kid");

  return (
    <ShopLayout
      title="Productos - niños"
      pageDescription="Productos de niños"
    >
      <Typography variant="h1" component="h1">
        Niños
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos para niño
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default kid;
