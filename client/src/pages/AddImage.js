import React, { useState } from "react";
import Page from "../components/Page";
import { Form, Button, Container } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { ADD_NEWS } from "../utils/mutations";
//Components
import BackButton from "../components/BackButton";
import AlertModal from "../components/AlertModal";

const AddImage = () => {
  const [addImage] = useMutation(ADD_IMAGE);
  const [modalShow, setModalShow] = useState(false);

  let alertDetails = {
    title: "Do you want to add another image?",
    back: "/news",
    add: true
  };

  const [state, setState] = useState({
    title: "",
    link: ""
  });

  const handleAddImage = async () => {
    await addImage({
      variables: { title: state.title, link: state.link }
    });
    setModalShow(true);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  };

  console.log(state);

  return (
    <Page title="Add News" className="p-3">
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
          justifyContent: "center",
          paddingTop: "30px"
        }}
      >
        <div>
          <Form.Group className="mb-3">
            <Form.Label>Image Title</Form.Label>
            <Form.Control
              name="title"
              onChange={handleChange}
              placeholder="Enter title..."
            ></Form.Control>
          </Form.Group>
        </div>
      </Container>
      <Form.Group className="mb-3">
        <Form.Label>Image Link</Form.Label>
        <Form.Control
          name="title"
          onChange={handleChange}
          placeholder="Enter url..."
        ></Form.Control>
      </Form.Group>

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
    </Page>
  );
};

export default AddImage;
