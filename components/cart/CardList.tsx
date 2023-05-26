import { initialData } from "@/database/products";
import { Grid, Typography, Link, CardActionArea, CardMedia, Box, Button } from "@mui/material";
import NextLink from "next/link";
import { Itemcounter } from "../ui";
import { FC } from "react";

interface Props {
  editable?: boolean
}

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
export const CardList: FC<Props> = ({editable = false}) => {
  return (
    <>
      {productsInCart.map((product) => (
        <Grid key={product.slug} container spacing={2} sx={{mb:2}}>
          
          <Grid item xs={3} >
          <NextLink href="/product/slug" passHref legacyBehavior>
           <Link>
            <CardActionArea>
              <CardMedia 
                image={`products/${product.images[0]}`}
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
              <Typography variant='body2'>Talla: <strong>M</strong></Typography>
              {
                editable
                ?<Itemcounter/>
                :<Typography variant='h5'>3 Items</Typography>}
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
