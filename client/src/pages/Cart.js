import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART } from "../utils/actions";
import { Card, ListGroup, Button } from "react-bootstrap";
// Components
import Page from "../components/Page";

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const cart = state.cart;

  const handleRemove = (event) => {
    dispatch({
      type: REMOVE_FROM_CART,
      target: event.target.value,
    });
  };

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

      {cart.length < 1 ? (
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: 25,
              fontFamily: "Limo",
              paddingTop: "20px",
            }}
          >
            You have nothing in your cart.
          </h1>
        </div>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              className="card"
              style={{
                border: "none",
                width: "275px",
                margin: "10px",
              }}
            >
              <ListGroup>
                <ListGroup.Item>Qty: {item.qty}</ListGroup.Item>
                <ListGroup.Item>Name: {item.name}</ListGroup.Item>
                <ListGroup.Item>Price: $ {item.price}</ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    value={index}
                    onClick={handleRemove}
                    style={{
                      backgroundColor: "#b33e3e",
                      border: "none",
                    }}
                  >
                    Remove
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        ))
      )}
    </Page>
  );
};

export default Cart;
