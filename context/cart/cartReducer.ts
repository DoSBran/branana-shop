import { ProductCartInterface, CartSumary } from "@/interfaces";
import { CartState } from ".";

type CartActionType =
  | {
      type: "[Cart] | Load card from cookies | storage";
      payload: ProductCartInterface[];
    }
  | { type: "[Cart] | Add Product"; payload: ProductCartInterface[] }
  | {
      type: "[Cart] | Update cart product quantity";
      payload: ProductCartInterface[];
    }
  | { type: "[Cart] | Delete cart product"; payload: ProductCartInterface[] }
  | { type: "[Cart] | Update Order Sumary"; payload: CartSumary }

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case "[Cart] | Load card from cookies | storage":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "[Cart] | Add Product":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "[Cart] | Update cart product quantity":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "[Cart] | Delete cart product":
      return {
        ...state,
        cart: [...action.payload]
      }
    case "[Cart] | Update Order Sumary":
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};
