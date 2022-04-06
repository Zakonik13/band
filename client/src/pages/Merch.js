import React, { useState, useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { GET_MERCH } from "../utils/queries";
import { REMOVE_MERCH } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Col, Button } from "react-bootstrap";
import Auth from "../utils/Auth.js";
import AlertModal from "../components/AlertModal";
// Components
import Page from "../components/Page";
import { UPDATE_CART } from "../utils/actions";

const Merch = () => {
  const [state, dispatch] = useStoreContext();
  const [formState, setFormState] = useState({
    image: "",
    name: "",
    price: "",
    quantity: "",
    type: ""
  });
  const { data, loading } = useQuery(GET_MERCH);
  const [removeMerch] = useMutation(REMOVE_MERCH);
  const [modalShow, setModalShow] = useState(false);

  let alertDetails = {
    title: "Item successfully added to your cart.",
    ok: true
  };

  useEffect(() => {
    if (formState.name === "") {
      console.log("No items");
    } else {
      dispatch({
        type: UPDATE_CART,
        cart: formState
      });
    }
  }, [formState, dispatch]);

  const handleRemove = async id => {
    await removeMerch({
      variables: { id },
      refetchQueries: [{ query: GET_MERCH }]
    });
  };

  if (loading) {
    return "";
  }

  const handleChange = event => {
    // const { name, value } = event.target;
    let index = event.target.value;
    setModalShow(true);

    setFormState({
      ...formState,
      image: data.merch[index].image,
      name: data.merch[index].name,
      price: data.merch[index].price,
      qty: data.merch[index].quantity,
      type: data.merch[index].type
    });
  };

  console.log(state, formState);

  return (
    <Page title={"Merch"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontFamily: "Limo"
        }}
      >
        <div>Merchandise</div>
      </div>
      <hr />
      <AlertModal
        alertDetails={alertDetails}
        show={modalShow}
        setModalShow={setModalShow}
        onHide={() => setModalShow(false)}
      />
      <Col>
        {data.merch.map((item, index) => {
          return (
            <div
              key={item._id}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "20px"
              }}
            >
              <img
                className="merch-link"
                style={{ height: "200px", width: "auto" }}
                src={item.image}
                alt=""
              />
              <div style={{ paddingTop: "10px", margin: "15px" }}>
                <div>
                  <center>
                    <h4>{item.name}</h4>
                    <h6 className="p-1">Price: $ {item.price}</h6>
                    <h6 className="p-1">Quantity: {item.quantity}</h6>
                    {Auth.loggedIn() ? (
                      <Button
                        onClick={() => handleRemove(item._id)}
                        className="m-2"
                        size="sm"
                        variant="outline-danger"
                      >
                        Remove Item
                      </Button>
                    ) : (
                      <Button
                        onClick={handleChange}
                        value={index}
                        className="m-2"
                        size="sm"
                        variant="outline-secondary"
                      >
                        Add to Cart
                      </Button>
                    )}
                  </center>
                </div>
              </div>
            </div>
          );
        })}
      </Col>
    </Page>
  );
};

export default Merch;
