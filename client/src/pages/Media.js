import React from "react";
import { Row } from "react-bootstrap";
// Images
import band2 from "../images/band2.jpeg";
import band3 from "../images/band3.jpg";
import band4 from "../images/band4.jpg";
// Components
import Page from "../components/Page";

const Media = () => {
  return (
    <Page title={"Media"}>
<<<<<<< HEAD
      <div style={{ display: "flex", justifyContent: "center", fontSize: 35, fontFamily: "Limo" }}>
=======
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontFamily: "Limo",
        }}
      >
>>>>>>> 786fe5b9bf26d18ded1e9d6d95888c3bf7d758ca
        <div>Media</div>
      </div>
      <hr />
      <div>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ height: "200px", width: "auto" }} src={band2} alt="" />

          <img style={{ height: "200px", width: "auto" }} src={band3} alt="" />
          <img style={{ height: "200px", width: "auto" }} src={band4} alt="" />
        </Row>
      </div>
    </Page>
  );
};

export default Media;
