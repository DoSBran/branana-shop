import { FC, useEffect, useReducer, useState } from "react";
import { CartContext, cartReducer } from ".";
import { ProductCartInterface } from "@/interfaces";
import Cookie from "js-cookie";
import { OrderSumary } from "../../components/cart/OrderSumary";

export interface CartState {
  cart: ProductCartInterface[];
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
}

const Cart_Initial_State: CartState = {
  cart: [],
  numberOfItems: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
};

interface provider {
  children: React.ReactNode;
}

export const CartProvider: FC<provider> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, Cart_Initial_State);
  const [isCartWithItems, setIsCartWithItem] = useState(false);
  useEffect(() => {
    try {
      const cartCookie = Cookie.get("cart")
        ? JSON.parse(Cookie.get("cart")!)
        : [];
      dispatch({
        type: "[Cart] | Load card from cookies | storage",
        payload: cartCookie,
      });
    } catch (error) {
      dispatch({
        type: "[Cart] | Load card from cookies | storage",
        payload: [],
      });
    }
  }, []);

  useEffect(() => {
    if (isCartWithItems) Cookie.set("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const numberOfItems = state.cart.reduce(
    (previous, current) => current.quantity + previous,
    0
  );
  const subTotal = state.cart.reduce(
    (previous, current) => current.price * current.quantity + previous,
    0
  );
  const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE);

  useEffect(() => {
    const OrderSumary = {
      numberOfItems,
      subTotal,
      tax: subTotal * taxRate,
      total: subTotal * (taxRate + 1),
    };

    dispatch({type: '[Cart] | Update Order Sumary', payload: OrderSumary})
  }, [state.cart]);

  const addToCart = (product: ProductCartInterface) => {
    setIsCartWithItem(true);
    const productIncart = state.cart.some(
      (p) => p._id === product._id && p.size === product.size
    );

    if (!productIncart)
      return dispatch({
        type: "[Cart] | Add Product",
        payload: [...state.cart, product],
      });

    const updateProducts = state.cart.map((p) => {
      setIsCartWithItem(true);
      if (p._id !== product._id) return p;
      if (p.size !== product.size) return p;

      p.quantity += product.quantity;

      return p;
    });

    dispatch({ type: "[Cart] | Add Product", payload: updateProducts });
  };

  const updateCartQuantity = (products: ProductCartInterface[]) => {
    setIsCartWithItem(true);
    dispatch({
      type: "[Cart] | Update cart product quantity",
      payload: products,
    });
  };

  const deleteCartItem = (products: ProductCartInterface[]) => {
    setIsCartWithItem(true);
    dispatch({ type: "[Cart] | Delete cart product", payload: products });
  };
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        updateCartQuantity,
        deleteCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
