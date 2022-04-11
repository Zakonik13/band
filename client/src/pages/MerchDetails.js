import React from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_MERCH_BY_ID } from "../utils/queries";
//Components
import BackButton from "../components/BackButton";
//Images
import hat from "../images/hat.jpg";

const MerchDetails = () => {
  let { id } = useParams();
  const { loading, data } = useQuery(GET_MERCH_BY_ID, {
    variables: { _id: id },
  });

  const currentItem = data?.merchById || {};

  console.log(id);
  console.log(currentItem);

  function handleAlert() {
    alert("Unfortunately this item is SOLD OUT");
  }

  return (
    <>
      <div className="p-4">
        <BackButton />
      </div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          fontFamily: "Limo",
        }}
      >
        ~ {currentItem.name} ~
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <img className="border" src={currentItem.image} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          paddingBottom: "40px",
        }}
      >
        <div>
          <h5
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {"$" + currentItem.price}
          </h5>
          <h6
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Quantity: {currentItem.quantity}
          </h6>
          <Button variant="outline-secondary" onClick={handleAlert}>
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default MerchDetails;
