import { AuthLayOut } from '@/components/layouts'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import NextLink from 'next/link'
import React from 'react'

const login = () => {
  return (
    <AuthLayOut title='Ingresar'>
        <Box sx={{width: 350, padding: '10px 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h1" component='h1'>Iniciar Sesion</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Correo' variant="filled" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Contraseña' variant="filled" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <Button color='secondary' className='circular-btn' size='large' fullWidth>Iniciar Sesion</Button>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='end'>
                    <NextLink href='/auth/register' passHref legacyBehavior>
                        <Link underline='always'>
                            ¿No tienes cuenta?
                        </Link>
                    </NextLink>
                </Grid>
            </Grid>
        </Box>
    </AuthLayOut>
  )
}

export default login