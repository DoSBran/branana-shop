import { CardList, OrderSumary } from "@/components/cart";
import { ShopLayout } from "@/components/layouts";
import { CreditCardOffOutlined, CreditCardOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import React from "react";

const order = () => {
  return (
    <ShopLayout
      title={"Resumen de Orden  213215"}
      pageDescription={"Resumen de la orden"}
    >
      <Typography variant="h1" component="h1">
        Orden: 123115
      </Typography>

      {/* <Chip
        sx={{my: 2}}
        label='Pendiente de Pago'
        variant='outlined'
        color="error"
        icon={<CreditCardOffOutlined/>}
    /> */}
      <Chip
        sx={{ my: 2 }}
        label="La orden ya fue pagada"
        variant="outlined"
        color="success"
        icon={<CreditCardOutlined />}
      />
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CardList editable />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">
                Resumen de productos (3 productos)
              </Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">
                  Direccion de Entrega
                </Typography>
                <NextLink href="/checkOut/adress" passHref legacyBehavior>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>
              <Typography>Brandon Cavichioni</Typography>
              <Typography>323, algun lugar</Typography>
              <Typography>Canada</Typography>
              <Typography>+506 61781010</Typography>

              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent="end">
                <NextLink href="/cart" passHref legacyBehavior>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>
              <OrderSumary />
              <Box sx={{ mt: 3 }}>
                <h1>
                  Pagar
                </h1>
                <Chip
                  sx={{ my: 2 }}
                  label="La orden ya fue pagada"
                  variant="outlined"
                  color="success"
                  icon={<CreditCardOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default order;
