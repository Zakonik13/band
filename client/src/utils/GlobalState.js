import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

// Decides how state is initialized by checking for data in localStorage
let setStorage;
const storage = JSON.parse(localStorage.getItem("cart"));
if (storage === null) {
  setStorage = [];
} else {
  setStorage = storage;
}

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    cart: setStorage,
  });

  // Checks to see if state matches what's in localStorage, if not localStorage is updated
  if (state.cart === storage) {
    console.log("up-to-date");
  } else {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
