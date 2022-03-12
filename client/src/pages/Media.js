import React from "react"
import { Col } from "react-bootstrap"
// import ImageGallery from "react-image-gallery"
// Images
import music from "../images/music.png"
import photos from "../images/photo.svg"
import videos from "../images/video.svg"
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
          fontFamily: "Limo",
          paddingRight: 30
        }}
      >
        <div style={{ paddingLeft: "30px" }}>Media</div>
      </div>
      <hr />

      <Col style={{ display: "flex", justifyContent: "center" }}>
        <a style={{ textDecoration: "none" }} href="/images">
          <h3 style={{ fontFamily: "Limo", fontSize: 20 }} className="text-center text-muted">
            Images
          </h3>
          <img className="media-link" style={{ height: "300px", width: "auto" }} src={photos} alt="" />
        </a>
        <a style={{ textDecoration: "none" }} href="/music">
          <h3 style={{ fontFamily: "Limo", fontSize: 20 }} className="text-center text-muted">
            Music
          </h3>
          <img className="media-link" style={{ height: "300px", width: "auto", fontFamily: "Limo" }} src={music} alt="" />
        </a>
        <a style={{ textDecoration: "none" }} href="/videos">
          <h3 style={{ fontFamily: "Limo", fontSize: 20 }} className="text-center text-muted">
            Videos
          </h3>
          <img className="media-link" style={{ height: "300px", width: "auto" }} src={videos} alt="" />
        </a>
      </Col>

      <hr />
    </Page>
  )
}

export default Media
