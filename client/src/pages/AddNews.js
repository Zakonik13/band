import React, { useState } from "react";
import Page from "../components/Page";
import { Form, Button, Container } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { ADD_NEWS } from "../utils/mutations";
//Components
import BackButton from "../components/BackButton";
import AlertModal from "../components/AlertModal";

const AddNews = () => {
  const [addNews] = useMutation(ADD_NEWS);
  const [modalShow, setModalShow] = useState(false);

  let alertDetails = {
    title: "Do you want to add more news?",
    back: "/news",
    add: true
  };

  const [state, setState] = useState({
    date: "",
    title: "",
    body: ""
  });

  const handleAddNews = async () => {
    await addNews({
      variables: { date: state.date, title: state.title, body: state.body }
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
        Add News
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
            <Form.Label>News Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              onChange={handleChange}
              placeholder="Enter date..."
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>News Title</Form.Label>
            <Form.Control
              name="title"
              onChange={handleChange}
              placeholder="Enter title..."
            ></Form.Control>
          </Form.Group>
        </div>
      </Container>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="form-group about">
          <label>News Body</label>
          <textarea
            rows="10"
            cols="100"
            type="text"
            className="form-control aboutInput"
            name="body"
            onChange={handleChange}
            placeholder="Enter body..."
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px"
        }}
      >
        <Button
          onClick={handleAddNews}
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

export default AddNews;