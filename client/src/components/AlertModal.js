import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
//Images
import mail from "../images/mail.svg";

function AlertModal({
  alertDetails,
  setModalShow,
  show,
  onHide,
  email,
  setEmail,
  handleAddSubscription,
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmail({
      ...email,
      [name]: value,
    });
  };

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        {alertDetails.email ? (
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
