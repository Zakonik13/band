import React from "react"
import ImageGallery from "react-image-gallery"
//Components
import BackButton from "../components/BackButton"
import Page from "../components/Page"
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
    <Page title={"Images"}>
      <div>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: 35,
            fontFamily: "Limo",
            paddingTop: "20px"
          }}
        >
          Images
        </h2>
        <hr />

        <div className="p-4">
          <BackButton />
        </div>

        <div className="image-container">
          <ImageGallery infinite items={images} />
        </div>
      </div>
    </Page>
  )
}

export default Images
