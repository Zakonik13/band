import React from "react"
import { Row } from "react-bootstrap"
import shirt from "../images/shirt.jpg"
import hat from "../images/hat.jpg"
import poster from "../images/poster.jpg"
import vinyl from "../images/vinyl.jpg"
// Components
import Page from "../components/Page"

const Merch = () => {
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
      <div>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <img className="merch-link" style={{ height: "200px", width: "auto" }} src={vinyl} alt="" />
          <img className="merch-link" style={{ height: "200px", width: "auto" }} src={shirt} alt="" />
          <img className="merch-link" style={{ height: "200px", width: "auto" }} src={hat} alt="" />
          <img className="merch-link" style={{ height: "200px", width: "auto" }} src={poster} alt="" />
        </Row>
      </div>
    </Page>
  )
}

export default Merch
