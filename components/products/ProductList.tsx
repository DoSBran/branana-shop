import { ProductInterface } from "@/interfaces";
import { Grid } from "@mui/material";
import { FC } from "react";
import { ProductCard } from ".";

interface Props {
  products: ProductInterface[];
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid container>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </Grid>
  );
};
