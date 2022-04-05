import React, { useState } from "react";
import Page from "../components/Page";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Container,
} from "react-bootstrap";
import Auth from "../utils/Auth.js";
//Components
import BackButton from "../components/BackButton";
import AlertModal from "../components/AlertModal";
import PictureUploader from "../components/PictureUploader";
import { ADD_MERCH } from "../utils/mutations";
import { useMutation } from "@apollo/react-hooks";

const AddMerch = () => {
  const [addMerch] = useMutation(ADD_MERCH);
  const [modalShow, setModalShow] = useState(false);
  const [image, setImage] = useState("");

  let alertDetails = {
    title: "Do you want to add more merchandise?",
    back: "/merch",
    add: true,
  };

  const [state, setState] = useState({
    type: "",
    name: "",
    price: 0,
    quantity: 0,
  });

  const handleAddMerch = async () => {
    setModalShow(true);
    await addMerch({
      variables: {
        type: state.type,
        name: state.name,
        price: parseFloat(state.price),
        quantity: parseFloat(state.quantity),
        image: image,
      },
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      {Auth.loggedIn() ? (
        <Page title="Add Merch" className="p-3">
          <h1
            className="p-2"
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "Limo",
            }}
          >
            Add Merchandise
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
              paddingTop: "30px",
            }}
          >
            <div>
              <Form.Group className="mb-3">
                <Form.Label>What type of product are you adding?</Form.Label>
                <Form.Select
                  as="select"
                  name="type"
                  readOnly
                  onChange={handleChange}
                >
                  <option>...</option>
                  <option>T-Shirt</option>
                  <option>Hat</option>
                  <option>Poster</option>
                  <option>Vinyl</option>
                </Form.Select>
              </Form.Group>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Form.Group className="mb-4">
                  <PictureUploader setImage={setImage} />
                </Form.Group>
              </div>

              <Form.Group className="mb-4">
                <Form.Label>Name of item</Form.Label>
                <Form.Control
                  placeholder="Enter item name..."
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Price of item</Form.Label>
                <InputGroup className="mb-4">
                  <InputGroup.Text>$</InputGroup.Text>
                  <FormControl
                    onChange={handleChange}
                    type="number"
                    name="price"
                    placeholder="Enter price..."
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Quantity available</Form.Label>
                <FormControl
                  type="number"
                  onChange={handleChange}
                  name="quantity"
                  placeholder="Enter quantity available..."
                />
              </Form.Group>
            </div>
          </Container>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            <Button
              className="mb-4"
              variant="outline-secondary"
              onClick={handleAddMerch}
            >
              Complete
            </Button>
          </div>
          <hr />
        </Page>
      ) : (
        <Page>
          <div
            style={{
              fontFamily: "Limo",
              display: "flex",
              justifyContent: "center",
              fontSize: "30px",
            }}
          >
            You must be logged in as admin to access this page.
          </div>
        </Page>
      )}
    </>
  );
};

export default AddMerch;
