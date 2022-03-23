import React from "react"
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
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <a href="/merchdetails">
          <img className="merch-link" style={{ height: "200px", width: "auto" }} src={vinyl} alt="" />
        </a>
        <a href="/merchdetails">
          <img className="merch-link" style={{ height: "200px", width: "auto" }} src={shirt} alt="" />
        </a>
        <a href="/merchdetails">
          <img className="merch-link" style={{ height: "200px", width: "auto" }} src={hat} alt="" />
        </a>
        <a href="/merchdetails">
          <img className="merch-link" style={{ height: "200px", width: "auto" }} src={poster} alt="" />
        </a>
      </div>
    </Page>
  )
}

export default Merch
