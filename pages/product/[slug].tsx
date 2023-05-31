import { ShopLayout } from "@/components/layouts";
import { ProductSizeSelector, ProductSlideShow } from "@/components/products";
import { Itemcounter } from "@/components/ui";
import { ProductInterface } from "@/interfaces";
import { Box, Button, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import { products } from "@/database";
import { GetStaticPaths } from 'next'
import { GetStaticProps } from 'next'

interface Props {
  product: ProductInterface;
}

const slug: NextPage<Props> = ({ product }) => {
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
              <Itemcounter />
              <ProductSizeSelector
                sizes={product.sizes}
                // selectedSizes={product.sizes[0]}
              />
            </Box>
            <Button color="secondary" className="circular-btn">
              Agregar al Carrito
            </Button>

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
  const data = await  products.getAllProductSlugs();
  const slugs: string[] = data.map(slug => slug.slug);

  return {
    paths: slugs.map(slug => ({
      params: {slug}
    })),
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {slug} = params as {slug: string}
  const product = await  products.dbProduct(slug) 

  if(!product){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
    revalidate: 86400
  }
}