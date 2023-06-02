import { FC, useReducer } from "react";
import { CartContext, cartReducer } from ".";
import { ProductCartInterface } from "@/interfaces";

export interface CartState {
  cart: ProductCartInterface[];
}

const Cart_Initial_State: CartState = {
  cart: [],
};

interface provider {
  children: React.ReactNode;
}

export const CartProvider: FC<provider> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, Cart_Initial_State);

  const addToCart = (product: ProductCartInterface) => {
    const productIncart = state.cart.some(
      (p) => p._id === product._id && p.size === product.size
    );

    

    if (!productIncart)
      return dispatch({
        type: "[Cart] | Add Product",
        payload: [...state.cart, product],
      });

      const updateProducts = state.cart.map(p => {
        if(p._id !== product._id) return p;
        if(p.size !== product.size) return p;
  
        p.quantity += product.quantity
       
        return p;
      })

       dispatch({type: '[Cart] | Add Product', payload: updateProducts});
  };
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
