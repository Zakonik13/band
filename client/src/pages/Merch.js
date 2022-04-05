import React from "react";
import { GET_MERCH } from "../utils/queries";
import { REMOVE_MERCH } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Col, Button } from "react-bootstrap";
import Auth from "../utils/Auth.js";
// Components
import Page from "../components/Page";

const Merch = () => {
  const { data, loading } = useQuery(GET_MERCH);
  const [removeMerch] = useMutation(REMOVE_MERCH);

  const handleRemove = async id => {
    await removeMerch({
      variables: { id },
      refetchQueries: [{ query: GET_MERCH }]
    });
  };

  if (loading) {
    return "";
  }

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

      <Col>
        {data.merch.map(item => {
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
