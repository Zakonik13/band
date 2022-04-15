import React from "react";
import ImageGallery from "react-image-gallery";
//Components
import BackButton from "../components/BackButton";
import Page from "../components/Page";

//Queries
import { GET_IMAGES } from "../utils/queries";
import { useQuery } from "@apollo/react-hooks";

const Images = () => {
  const { data, loading } = useQuery(GET_IMAGES);

  const images = data?.images.map(image => {
    return { original: image.link, thumbnail: image.link };
  });

  if (loading) {
    return "";
  }

  console.log(images);

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
  );
};

export default Images;
