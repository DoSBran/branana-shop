import {
  Grid,
  Typography,
  Link,
  CardActionArea,
  CardMedia,
  Box,
  Button,
} from "@mui/material";
import NextLink from "next/link";
import { Itemcounter } from "../ui";
import { FC, useContext, useId } from "react";
import { CartContext } from "@/context";
import { ProductCartInterface } from "@/interfaces";

interface Props {
  editable?: boolean;
}

export const CardList: FC<Props> = ({ editable = false }) => {
  const { cart, updateCartQuantity, deleteCartItem } = useContext(CartContext);
  const id = useId();
  const onChangeQuantity = (product: ProductCartInterface, quantity: number) => {
    product.quantity += quantity;
    const products = cart.map((item) => {
      if (product._id !== item._id ) return item;
      if (product.size !== item.size) return item;
      return product;
    })

    updateCartQuantity(products)
  }

  const onDelete = (product: ProductCartInterface) => {
    const products = cart.filter((item) => item !== product);
    deleteCartItem(products)
  }
  return (
    <>
      {cart.map((product) => (
        <Grid key={`${product._id}-${product.size}-${id}`} container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={3}>
            <NextLink href={`/product/${product.slug}`} passHref legacyBehavior>
              <Link>
                <CardActionArea>
                  <CardMedia
                    image={`/products/${product.image}`}
                    component="img"
                    sx={{ borderRadius: "5px" }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body2">
                Talla: <strong>{product.size}</strong>
              </Typography>
              {editable ? (
                <Itemcounter
                  counter={(value) => onChangeQuantity(product, value)}
                  quantity={product.quantity}
                  max={10}
                />
              ) : (
                <Typography variant="h5">
                  {product.quantity} item{product.quantity > 1 ? "s" : ""}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="subtitle1">${product.price}</Typography>
            {editable && (
              <Button onClick={() => onDelete(product)} variant="text" color="secondary">
                Eliminar
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
