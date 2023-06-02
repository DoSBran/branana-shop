import { ShopLayout } from "@/components/layouts";
import { ProductSizeSelector, ProductSlideShow } from "@/components/products";
import { Itemcounter } from "@/components/ui";
import {
  ProductCartInterface,
  ProductInterface,
  SizesInterface,
} from "@/interfaces";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import { products } from "@/database";
import { GetStaticPaths } from "next";
import { GetStaticProps } from "next";
import { useContext, useState } from "react";
import { CartContext } from "@/context";
import { useRouter } from "next/router";

interface Props {
  product: ProductInterface;
}

const slug: NextPage<Props> = ({ product }) => {
  const [tempCardProduct, setTempCardProduct] = useState<ProductCartInterface>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1,
  });

  const {addToCart} = useContext(CartContext);
  const {push} = useRouter();
  const onSelectedSize = (size: SizesInterface) => {
    setTempCardProduct((currentProduct) => ({ ...currentProduct, size }));
  };

  const counter = (number: number) => {
    setTempCardProduct((currentProduct) => ({
      ...currentProduct,
      quantity: currentProduct.quantity + number,
    }));
  };

  const onAddCart = () => {
    addToCart(tempCardProduct)
    push('/cart');
  }
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideShow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              ${product.price}
            </Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              <Itemcounter
                counter={counter}
                quantity={tempCardProduct.quantity}
                max={product.inStock}
              />
              <ProductSizeSelector
                sizes={product.sizes}
                selectedSizes={tempCardProduct.size}
                onSelectedSize={onSelectedSize}
              />
            </Box>

            {product.inStock > 0 ? (
              <Button disabled={!tempCardProduct.size?true:false} onClick={onAddCart} color="secondary" className="circular-btn">
                {tempCardProduct.size
                  ? "Agregar al Carrito"
                  : "Seleccione una talla"}
              </Button>
            ) : (
              <Chip
                color="error"
                label="No hay disponibles"
                variant="outlined"
              />
            )}

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Descripción:</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default slug;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await products.getAllProductSlugs();
  const slugs: string[] = data.map((slug) => slug.slug);

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const product = await products.dbProduct(slug);

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 86400,
  };
};
