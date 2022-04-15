import React, { useState } from "react";
//Components
import Page from "../components/Page";
import Auth from "../utils/Auth.js";
import { Button } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { REMOVE_VIDEO } from "../utils/mutations";
import { GET_VIDEOS } from "../utils/queries";
import AlertModal from "../components/AlertModal";
import BackButton from "../components/BackButton";

const Videos = () => {
  const { data, loading } = useQuery(GET_VIDEOS);
  const [removeVideo] = useMutation(REMOVE_VIDEO);
  const [modalShow, setModalShow] = useState(false);

  if (loading) {
    return "";
  }

  let alertDetails = {
    title: "This tour date is sold out!",
    ok: true
  };

  const handleRemove = async id => {
    await removeVideo({
      variables: { _id: id },
      refetchQueries: [{ query: GET_VIDEOS }]
    });
  };

  return (
    <Page title={"Videos"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontFamily: "Limo"
        }}
      >
        <div>Videos</div>
        <AlertModal
          alertDetails={alertDetails}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
      <hr />
      <BackButton />

      {data.videos.map(video => {
        return (
          <center key={video._id}>
            <div style={{ padding: "20px" }}>
              <h4 style={{ fontFamily: "Limo" }}>{video.title}</h4>
              <iframe
                width="700"
                height="500"
                src={video.link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              {Auth.loggedIn() && (
                <center style={{ paddingBottom: "40px" }}>
                  <Button
                    onClick={() => handleRemove(video._id)}
                    variant="outline-danger"
                    size="sm"
                    className="mt-3"
                  >
                    Remove Video
                  </Button>
                </center>
              )}
            </div>
          </center>
        );
      })}

      <hr />
    </Page>
  );
};

export default Videos;
