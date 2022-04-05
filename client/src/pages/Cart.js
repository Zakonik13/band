import React from "react"
// Components
import Page from "../components/Page"

const Cart = () => {
  return (
    <Page title={"Cart"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontFamily: "Limo"
        }}
      >
        <div>Cart</div>
      </div>
      <hr />

      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: 25,
            fontFamily: "Limo",
            paddingTop: "20px"
          }}
        >
          You have nothing in your cart.
        </h1>
      </div>
    </Page>
  )
}

export default Cart
