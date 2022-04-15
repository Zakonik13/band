import React, { useState } from "react";
import Page from "../components/Page";
import { Form, Button, Container } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { ADD_IMAGE } from "../utils/mutations";
import { REMOVE_IMAGE } from "../utils/mutations";
import { GET_IMAGES } from "../utils/queries";

//Components
import BackButton from "../components/BackButton";
import AlertModal from "../components/AlertModal";
import PictureUploader from "../components/PictureUploader";

const AddRemoveImage = () => {
  const [addImage] = useMutation(ADD_IMAGE);
  const [removeImage] = useMutation(REMOVE_IMAGE);
  const [modalShow, setModalShow] = useState(false);
  const [image, setImage] = useState("");
  const { data, loading } = useQuery(GET_IMAGES);

  let alertDetails = {
    title: "Do you want to add another image?",
    add: true,
    back: "/images"
  };

  const [state, setState] = useState({
    title: "",
    link: ""
  });

  if (loading) {
    return "";
  }

  const handleAddImage = async () => {
    await addImage({
      variables: { title: state.title, link: image }
    });
    setModalShow(true);
  };

  const handleRemove = async id => {
    await removeImage({
      variables: { _id: id },
      refetchQueries: [{ query: GET_IMAGES }]
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <Page title="Add Image" className="p-3">
      <h1
        className="p-2"
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Limo"
        }}
      >
        Add Image
      </h1>
      <hr />
      <BackButton />

      <AlertModal
        alertDetails={alertDetails}
        show={modalShow}
        setModalShow={setModalShow}
        onHide={() => setModalShow(false)}
      />
      <Container
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div>
          <Form.Group>
            <PictureUploader setImage={setImage} />
          </Form.Group>
        </div>
      </Container>

      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "30px"
        }}
      >
        <div>
          <Form.Group>
            <Form.Label>Image Title</Form.Label>
            <Form.Control
              name="title"
              onChange={handleChange}
              placeholder="Enter title..."
            ></Form.Control>
          </Form.Group>
        </div>
      </Container>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px"
        }}
      >
        <Button
          onClick={handleAddImage}
          className="mb-4"
          variant="outline-secondary"
        >
          Complete
        </Button>
      </div>
      <hr />
      <h1
        className="p-2"
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Limo"
        }}
      >
        Remove Image
      </h1>

      {data.images.map(images => {
        return (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "5px"
              }}
            >
              <img
                style={{ height: "100px", width: "auto" }}
                src={images.link}
                key={images._id}
                alt=""
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "20px"
              }}
            >
              <Button
                onClick={() => handleRemove(images._id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          </>
        );
      })}

      <hr />
    </Page>
  );
};

export default AddRemoveImage;
