import { ProductCartInterface } from "@/interfaces";
import { createContext } from "react";

interface ContextProps {
  cart: ProductCartInterface[];
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
  addToCart: (product: ProductCartInterface) => void;
  updateCartQuantity: (products: ProductCartInterface[]) => void;
  deleteCartItem: (products: ProductCartInterface[]) => void;
}

export const CartContext = createContext({} as ContextProps);
