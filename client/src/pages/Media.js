import React from "react"
import { Col } from "react-bootstrap"
// import ImageGallery from "react-image-gallery"
// Images
import music from "../images/music.svg"
import photos from "../images/photo.svg"
import videos from "../images/video.svg"
// Components
import Page from "../components/Page"

const Media = () => {
  return (
    <Page title={"Media"}>
      <center>
        <h1 style={{ paddingLeft: "30px", fontFamily: "Limo", fontSize: "35px" }}>Media</h1>
      </center>
      <hr />

      <Col style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
        <div className="p-3">
          <a style={{ textDecoration: "none" }} href="/images">
            <h3 style={{ fontFamily: "Limo", fontSize: 20 }} className="text-center text-muted">
              Images
            </h3>
            <img className="media-link" style={{ height: "200px", width: "auto" }} src={photos} alt="" />
          </a>
        </div>
        <div className="p-3">
          <a style={{ textDecoration: "none" }} href="/music">
            <h3 style={{ fontFamily: "Limo", fontSize: 20 }} className="text-center text-muted">
              Music
            </h3>
            <img className="media-link" style={{ height: "200px", width: "auto" }} src={music} alt="" />
          </a>
        </div>
        <div className="p-3">
          <a style={{ textDecoration: "none" }} href="/videos">
            <h3 style={{ fontFamily: "Limo", fontSize: 20 }} className="text-center text-muted">
              Videos
            </h3>
            <img className="media-link" style={{ height: "200px", width: "auto" }} src={videos} alt="" />
          </a>
        </div>
      </Col>

      <hr />
    </Page>
  )
}

export default Media
