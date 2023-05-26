import { CardList, OrderSumary } from "@/components/cart";
import { ShopLayout } from "@/components/layouts";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import React from "react";

const summary = () => {
  return (
    <ShopLayout
      title={"Resumen de  Orden"}
      pageDescription={"Resumen de la orden"}
    >
      <Typography variant="h1" component="h1">
        Carrito
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CardList editable/>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen de productos (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='space-between'>
              <Typography variant="subtitle1">Direccion de Entrega</Typography>
                <NextLink href='/checkOut/adress' passHref legacyBehavior>
                    <Link underline="always">
                        Editar
                    </Link>
                </NextLink>
              </Box>
              <Typography>Brandon Cavichioni</Typography>
              <Typography>323, algun lugar</Typography>
              <Typography>Canada</Typography>
              <Typography>+506 61781010</Typography>
            
              <Divider sx={{ my: 1 }} />
              <Box display='flex' justifyContent='end'>
                <NextLink href='/cart' passHref legacyBehavior>
                    <Link underline="always">
                        Editar
                    </Link>
                </NextLink>
              </Box>
              <OrderSumary/>
              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn">
                  Confirmar orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default summary;