import React from "react";
import hero from "../images/band1.jpg";
import Page from "./Page";

const Hero = () => {
  return (
    <Page title={"Home"}>
      <div>
        <img className="img-fluid w-100" src={hero} alt="band members" />
        <div className="image-header mb-4"></div>
      </div>
    </Page>
  );
};

export default Hero;
