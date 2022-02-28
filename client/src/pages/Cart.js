import React from "react";
// Components
import Page from "../components/Page";

const Cart = () => {
  return (
    <Page title={"Cart"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontFamily: "Limo",
        }}
      >
        <div>Cart</div>
      </div>
      <hr />
    </Page>
  );
};

export default Cart;
