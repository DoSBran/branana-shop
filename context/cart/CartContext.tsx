import { ProductCartInterface } from '@/interfaces';
import { createContext } from 'react'

interface ContextProps {
   cart: ProductCartInterface[];
   addToCart: (product: ProductCartInterface) => void;
}

export const CartContext = createContext({} as ContextProps);