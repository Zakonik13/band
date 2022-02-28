import React from "react"
import Page from "./Page"
import { Row } from "react-bootstrap"
import band2 from "../images/band2.jpeg"
import band3 from "../images/band3.jpg"
import band4 from "../images/band4.jpg"

const Media = () => {
  return (
    <Page title={"Media"}>
      <div style={{ display: "flex", justifyContent: "center", fontSize: 35, fontFamily: "Limo" }}>
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
  )
}

export default Media
