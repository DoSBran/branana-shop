import { ShopLayout } from '@/components/layouts'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const address = () => {
  return (
    <ShopLayout title={'Direccion'} pageDescription={'Confirmar direccion de destino'}>
        <Typography variant='h1' component='h1'>Direccion</Typography>
        <Grid container spacing={4} sx={{mt: 2}}>
            <Grid item xs={12} sm={6}>
                <TextField label='Nombre' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Apellido' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Direccion' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Direccion 2' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Codigo Postal' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Ciudad' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <InputLabel>Pais</InputLabel>
                    <Select variant='filled' label='Pais' value={1}>
                        <MenuItem value={1}>Costa Rica</MenuItem>
                        <MenuItem value={2}>Salvador</MenuItem>
                        <MenuItem value={3}>Honduras</MenuItem>

                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Teléfono' variant='filled' fullWidth/>
            </Grid>
        </Grid>
        <Box sx={{mt: 5}} display='flex' justifyContent= 'center'>
            <Button color='secondary' className='circular-btn' size="large">Revisar Pedido</Button>
        </Box>
    </ShopLayout>
  )
}

export default address