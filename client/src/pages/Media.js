import React from "react"
import { Col } from "react-bootstrap"
// Images
import band2 from "../images/band2.jpeg"
import band3 from "../images/band3.jpg"
import band4 from "../images/band4.jpg"
// Components
import Page from "../components/Page"

const Media = () => {
  return (
    <Page title={"Media"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontFamily: "Limo"
        }}
      >
        <div style={{ paddingLeft: "30px" }}>Media</div>
      </div>
      <hr />
      <div>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <a style={{ textDecoration: "none" }} href="/images">
            <h3 style={{ fontFamily: "Limo", fontSize: 20 }} className="text-center text-muted">
              Images
            </h3>
            <img className="media-link" style={{ height: "300px", width: "auto" }} src={band2} alt="" />
          </a>
          <a style={{ textDecoration: "none" }} href="/music">
            <h3 style={{ fontFamily: "Limo", fontSize: 20 }} className="text-center text-muted">
              Music
            </h3>
            <img className="media-link" style={{ height: "300px", width: "auto", fontFamily: "Limo" }} src={band3} alt="" />
          </a>
          <a style={{ textDecoration: "none" }} href="/videos">
            <h3 style={{ fontFamily: "Limo", fontSize: 20 }} className="text-center text-muted">
              Videos
            </h3>
            <img className="media-link" style={{ height: "300px", width: "auto" }} src={band4} alt="" />
          </a>
        </Col>
      </div>
      <hr />
    </Page>
  )
}

export default Media
