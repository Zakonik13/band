import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
//Images
import mail from "../images/mail.svg";
import { useMutation } from "@apollo/react-hooks";
import { ADD_SUBSCRIPTION } from "../utils/mutations";
import emailjs from "@emailjs/browser";

function AlertModal({ alertDetails, setModalShow, show, onHide }) {
  const [addSubscription] = useMutation(ADD_SUBSCRIPTION);
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "Thank you for signing up to our newsletter!",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleAddSubscription = async () => {
    try {
      await addSubscription({
        variables: {
          name: state.name,
          email: state.email,
          message: state.message,
        },
      });
      await emailjs
        .send(
          "service_rhwnuvu",
          "template_iic2uof",
          { name: state.name, email: state.email, message: state.message },
          "user_VX87bNMDuxlz9E5XfnclG"
        )
        .then(
          ((result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          })
        );
      setModalShow(false);
    } catch (e) {
      alert("You must provide a valid email address.");
    }
  };

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        {alertDetails.email === true ? (
          <>
            <h4
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Limo",
                fontSize: "40px",
              }}
            >
              {alertDetails.title}
            </h4>
            <center className="p-4">
              <img alt="mail-icon" height="100px" width="auto" src={mail}></img>
            </center>
          </>
        ) : (
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "Limo",
            }}
          >
            {alertDetails.title}
          </h4>
        )}

        {alertDetails.email ? (
          <Form.Group className="mb-4">
            <Form.Control
              placeholder="Enter name..."
              name="name"
              onChange={handleChange}
            />
            <br />
            <Form.Control
              placeholder="Enter email address..."
              name="email"
              onChange={handleChange}
            />
          </Form.Group>
        ) : (
          ""
        )}
      </Modal.Body>
      <Modal.Footer>
        {alertDetails.submit ? (
          <Button onClick={handleAddSubscription}>Submit</Button>
        ) : (
          ""
        )}
        {alertDetails.add ? (
          <Button onClick={() => window.location.reload(false)}>Add</Button>
        ) : (
          ""
        )}
        {alertDetails.back ? (
          <Button onClick={() => window.location.assign(alertDetails.back)}>
            Close
          </Button>
        ) : (
          ""
        )}
        {alertDetails.noThanks ? (
          <Button onClick={onHide}>No Thanks</Button>
        ) : (
          ""
        )}
        {alertDetails.ok ? <Button onClick={onHide}>OK</Button> : ""}
      </Modal.Footer>
    </Modal>
  );
}

export default AlertModal;
