import { ProductCartInterface } from "@/interfaces";
import { CartState } from ".";

type CartActionType =
  | {
      type: "[Cart] | Load card from cookies | storage";
      payload: ProductCartInterface[];
    }
  | { type: "[Cart] | Add Product"; payload: ProductCartInterface[] };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case "[Cart] | Load card from cookies | storage":
      return {
        ...state,
      };
    case "[Cart] | Add Product":
      return {
        ...state,
        cart: [...action.payload],
      };
    default:
      return state;
  }
};
