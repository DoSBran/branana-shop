import { AuthLayOut } from '@/components/layouts'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import NextLink from 'next/link'

const register = () => {
  return (
    <AuthLayOut title='registrarse'>
        <Box sx={{width: 350, padding: '10px 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h1" component='h1'>Crea una cuenta</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Nombre' variant="filled" fullWidth/>
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
                    <NextLink href='/auth/login' passHref legacyBehavior>
                        <Link underline='always'>
                            ¿Ya tienes cuenta?
                        </Link>
                    </NextLink>
                </Grid>
            </Grid>
        </Box>
    </AuthLayOut>
  )
}

export default register