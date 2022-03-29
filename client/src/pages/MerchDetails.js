import React from "react"
import { Button } from "react-bootstrap"
//Components
import BackButton from "../components/BackButton"
//Images
import hat from "../images/hat.jpg"

const MerchDetails = () => {
  function handleAlert() {
    alert("Unfortunately this item is SOLD OUT")
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
          fontFamily: "Limo"
        }}
      >
        ~ BlueGrass Billies Hat ~
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px"
        }}
      >
        <img className="border" src={hat} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          paddingBottom: "40px"
        }}
      >
        <div>
          <h5
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            $45
          </h5>
          <h6
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            Quantity: 4
          </h6>
          <Button variant="outline-secondary" onClick={handleAlert}>
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  )
}

export default MerchDetails
