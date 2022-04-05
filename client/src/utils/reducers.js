import { useReducer } from "react";
import { UPDATE_CART, REMOVE_FROM_CART } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of UPDATE_CART,
    // return a new state object with an updated cart array
    case UPDATE_CART:
      return {
        ...state,
        cart: [...state.cart, action.cart],
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter((item, index) => {
        return index !== parseInt(action.target);
      });
      return {
        ...state,
        cart: newState,
      };

    // if it's none of these actions, do not update state and all
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
