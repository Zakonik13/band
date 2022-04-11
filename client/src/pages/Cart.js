import React, { useState } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART } from "../utils/actions";
import { Button } from "react-bootstrap";
// Components
import Page from "../components/Page";
import AlertModal from "../components/AlertModal";
import axios from "axios";

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [modalShow, setModalShow] = useState(false);
  const cart = state.cart;
  const total = [];

  const handleCheckout = async () => {
    const response = await axios({
      method: "post",
      url: "/create-checkout-session",
      // map thru cart to build data for Stripe
      data: cart.map((item) => {
        return {
          amount: item.price,
          type: item.type,
        };
      }),
    });

    window.location.href = response.data.url;
  };

  const handleRemove = (event) => {
    dispatch({
      type: REMOVE_FROM_CART,
      target: event.target.value,
    });
    setModalShow(true);
  };

  for (let i = 0; i < cart.length; i++) {
    total.push(cart[i].price);
  }

  const cartTotal = total.reduce((accumulator, total) => {
    return accumulator + total;
  }, 0);

  const tax = parseFloat((cartTotal * 0.0925).toFixed(2));

  const totalWithTax = cartTotal + tax;

  let alertDetails = {
    title: "Item has been removed from your cart.",
    ok: true,
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
        <div>Your Cart</div>
      </div>
      <hr />
      <AlertModal
        alertDetails={alertDetails}
        show={modalShow}
        setModalShow={setModalShow}
        onHide={() => setModalShow(false)}
      />
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
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "30px",
            }}
          >
            <img
              className="merch-link"
              style={{ height: "120px", width: "auto" }}
              src={item.image}
              alt=""
            />

            <div style={{ paddingTop: "10px", margin: "15px" }}>
              <div>
                <center>
                  <h4
                    style={{
                      fontSize: "25px",
                      paddingLeft: "10px",
                      fontFamily: "Sans",
                    }}
                  >
                    {item.name}
                  </h4>

                  <Button
                    onClick={handleRemove}
                    value={index}
                    className="m-2"
                    size="sm"
                    variant="outline-danger"
                  >
                    Remove
                  </Button>
                </center>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginLeft: "100px",
                margin: "20px",
                fontFamily: "Sans",
                padding: "20px",
                fontSize: "20px",
              }}
            >
              {"$" + item.price}
            </div>
          </div>
        ))
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <hr style={{ width: "50%" }} />
      </div>
      <small
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "20px",
          paddingTop: "10px",
          fontFamily: "Sans",
          fontWeight: "100",
        }}
      >
        Total : {"$" + cartTotal.toFixed(2)}
      </small>
      <small
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "20px",
          fontFamily: "Sans",
          fontWeight: "100",
        }}
      >
        Tax : {"$" + tax}
      </small>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "55px",
          paddingTop: "10px",
          fontFamily: "Helvetica",
          fontWeight: "100",
        }}
      >
        {"$" + totalWithTax.toFixed(2)}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Button
          variant="outline-secondary"
          style={{
            marginTop: "15px",
          }}
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </div>
      <hr />
    </Page>
  );
};

export default Cart;
