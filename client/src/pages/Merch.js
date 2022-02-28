<<<<<<< HEAD
import React from "react"
import Page from "./Page"
import shirt from "../images/shirt.jpg"
import hat from "../images/hat.jpg"
import poster from "../images/poster.jpg"
import vinyl from "../images/vinyl.jpg"
import { Row } from "react-bootstrap"
=======
import React from "react";
import { Row } from "react-bootstrap";
import shirt from "../images/shirt.jpg";
import hat from "../images/hat.jpg";
import poster from "../images/poster.jpg";
// Components
import Page from "../components/Page";
>>>>>>> 786fe5b9bf26d18ded1e9d6d95888c3bf7d758ca

const Merch = () => {
  return (
    <Page title={"Merch"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontFamily: "Limo",
        }}
      >
        <div>Merchandise</div>
      </div>
      <hr />
      <div>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ height: "200px", width: "auto" }} src={vinyl} alt="" />
          <img style={{ height: "200px", width: "auto" }} src={shirt} alt="" />
          <img style={{ height: "200px", width: "auto" }} src={hat} alt="" />
          <img style={{ height: "200px", width: "auto" }} src={poster} alt="" />
        </Row>
      </div>
    </Page>
  );
};

export default Merch;
