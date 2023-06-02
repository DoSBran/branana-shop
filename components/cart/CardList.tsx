import { Grid, Typography, Link, CardActionArea, CardMedia, Box, Button } from "@mui/material";
import NextLink from "next/link";
import { Itemcounter } from "../ui";
import { FC, useContext } from "react";
import { CartContext } from "@/context";

interface Props {
  editable?: boolean
}

export const CardList: FC<Props> = ({editable = false}) => {
  const {cart} = useContext(CartContext);
  return (
    <>
      {cart.map((product) => (
        <Grid key={product.slug} container spacing={2} sx={{mb:2}}>
          
          <Grid item xs={3} >
          <NextLink href={`/product/${product.slug}`} passHref legacyBehavior>
           <Link>
            <CardActionArea>
              <CardMedia 
                image={`/products/${product.image}`}
                component='img'
                sx={{borderRadius: '5px'}}
              />
            </CardActionArea>
           </Link>
          </NextLink>
          </Grid>
          <Grid item xs={7} >
            <Box display='flex' flexDirection='column'>
              <Typography variant='body1'>{product.title}</Typography>
              <Typography variant='body2'>Talla: <strong>{product.size}</strong></Typography>
              {
                editable
                ?<Itemcounter counter={() => {}} quantity={product.quantity} max={0}/>
                :<Typography variant='h5'>{product.quantity}</Typography>}
            </Box>
          </Grid>
          <Grid item xs={2}  display='flex' alignItems='center' flexDirection='column'>
            <Typography variant="subtitle1">${product.price}</Typography>
            {editable && <Button variant="text" color="secondary">Eliminar</Button>}
            
          </Grid>
        </Grid>
      ))}
    </>
  );
};
