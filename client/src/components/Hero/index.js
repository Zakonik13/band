import React from "react"
import hero from "../../images/band.jpg"
import Page from "../../pages/Page"

const Hero = () => {
  return (
    <Page title={"Home"}>
      <div>
        <img className="img-fluid w-100" src={hero} alt="band members" />
        <div className="image-header mb-4"></div>
      </div>
    </Page>
  )
}

export default Hero
