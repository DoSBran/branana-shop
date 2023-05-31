import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { products as product } from "@/database";
import { ProductInterface } from "@/interfaces";
import { Box, Typography } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";

interface Props {
  products: ProductInterface[];
  foundProducts: boolean;
  query: string;
}

export const Search: NextPage<Props> = ({ products, query, foundProducts }) => {
  return (
    <ShopLayout
      title="Branna-shop"
      pageDescription="Encuentra los mejores productos, al mejor precio"
    >
      <Typography variant="h1" component="h1">
        Buscar productos
      </Typography>

      {foundProducts ? (
        <Box display='flex'>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Busqueda por productos realcionados a 
        </Typography>
        <Typography variant="h2" sx={{ ml: 1}} textTransform='capitalize' color='secondary'>
        {query}
      </Typography>
      </Box>
      ) : (
        <Box display='flex'>
          <Typography variant="h2" sx={{ mb: 1 }}>
            No se encontraron productos realcionados a
          </Typography>
          <Typography variant="h2" sx={{ ml: 1}} textTransform='capitalize' color='secondary'>
            {query}
          </Typography>
        </Box>
      )}

      <ProductList products={products} />
    </ShopLayout>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query } = params as { query: string };
  let products = await product.getProductByTerms(query);
  const foundProducts = products.length > 0;
  if (!foundProducts) {
    products = await product.getAllProducts();
  }

  return {
    props: {
      products,
      foundProducts,
      query,
    },
  };
};
