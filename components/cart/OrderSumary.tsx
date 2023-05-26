import { Grid, Typography } from '@mui/material'
import React from 'react'

export const OrderSumary = () => {
  return (
    <Grid container>
        <Grid item xs={6}>
            <Typography>No. products</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>3 items</Typography>
        </Grid>
        <Grid item xs={6} display='flex'>
            <Typography variant='subtitle2'>SubTotal</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography variant='subtitle2'>$155.33</Typography>
        </Grid>
        <Grid item xs={6} display='flex' >
            <Typography variant='subtitle2'>Impuestos</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography variant='subtitle2'>$155.33</Typography>
        </Grid>
        <Grid item xs={6} display='flex' >
            <Typography variant='subtitle1'>Total:</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography variant='subtitle1'>$155.33</Typography>
        </Grid>
    </Grid>
  )
}
