import React from "react"
import { Button } from "react-bootstrap"
import ImageGallery from "react-image-gallery"
//Images
import band1 from "../images/band1.jpg"
import band2 from "../images/band2.jpg"
import band3 from "../images/band3.jpg"
import band4 from "../images/band4.jpg"

const Images = () => {
  const images = [
    {
      original: band1,
      thumbnail: band1
    },
    {
      original: band2,
      thumbnail: band2
    },
    {
      original: band3,
      thumbnail: band3
    },
    {
      original: band4,
      thumbnail: band4
    }
  ]
  return (
    <div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontFamily: "Limo",
          paddingTop: "40px"
        }}
      >
        Images
      </h2>
      <hr />
      <div>
        <Button className="back-button" href="/media" size="sm">
          Back to Media
        </Button>
      </div>

      <div className="image-container">
        <ImageGallery infinite items={images} />
      </div>
    </div>
  )
}

export default Images
