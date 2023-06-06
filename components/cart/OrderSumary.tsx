import { CartContext } from "@/context";
import { currency } from "@/utils";
import { Grid, Typography } from "@mui/material";
import React, { useContext } from "react";

export const OrderSumary = () => {
  const { numberOfItems, subTotal, tax, total } = useContext(CartContext);
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>No. products</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>
          {numberOfItems} item{numberOfItems > 1 ? "s" : ""}
        </Typography>
      </Grid>
      <Grid item xs={6} display="flex">
        <Typography variant="subtitle2">SubTotal</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography variant="subtitle2">{currency.format(subTotal)}</Typography>
      </Grid>
      <Grid item xs={6} display="flex">
        <Typography variant="subtitle2">
          Impuestos ({Number(process.env.NEXT_PUBLIC_TAX_RATE) * 100}%)
        </Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography variant="subtitle2">{currency.format(tax)}</Typography>
      </Grid>
      <Grid item xs={6} display="flex">
        <Typography variant="subtitle1">Total:</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography variant="subtitle1">{currency.format(total)}</Typography>
      </Grid>
    </Grid>
  );
};
