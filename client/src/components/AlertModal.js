import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
//Images
import mail from "../images/mail.svg";
import { useMutation } from "@apollo/react-hooks";
import { ADD_SUBSCRIPTION } from "../utils/mutations";

function AlertModal(props) {
  const [addSubscription] = useMutation(ADD_SUBSCRIPTION);
  const [state, setState] = useState({
    email: ""
  });

  console.log(props.alertDetails);

  const handleChange = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleAddSubscription = async () => {
    try {
      await addSubscription({
        variables: {
          email: state.email
        }
      });
      props.setModalShow(false);
    } catch (e) {
      alert("You must provide a valid email address.");
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        {props.alertDetails.email === true ? (
          <>
            <h4
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Limo",
                fontSize: "40px"
              }}
            >
              {props.alertDetails.title}
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
              fontFamily: "Limo"
            }}
          >
            {props.alertDetails.title}
          </h4>
        )}

        {props.alertDetails.email ? (
          <Form.Group className="mb-4">
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
        {props.alertDetails.submit ? (
          <Button onClick={handleAddSubscription}>Submit</Button>
        ) : (
          ""
        )}
        {props.alertDetails.add ? (
          <Button onClick={() => window.location.reload(false)}>Add</Button>
        ) : (
          ""
        )}
        {props.alertDetails.back ? (
          <Button onClick={() => props.setModalShow(false)}>Close</Button>
        ) : (
          ""
        )}
        {props.alertDetails.ok ? (
          <Button onClick={props.onHide}>OK</Button>
        ) : (
          ""
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default AlertModal;
