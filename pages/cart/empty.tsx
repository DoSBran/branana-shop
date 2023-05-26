import { ShopLayout } from "@/components/layouts";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";
import React from "react";

const empty = () => {
  return (
    <ShopLayout
      title={"Carrito vacio"}
      pageDescription={"No hay articulos en el carrito"}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 200px)",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>Su carrito esta vacio</Typography>
          <NextLink href={"/"} passHref legacyBehavior>
            <Link typography="h4">Regresar</Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default empty;
