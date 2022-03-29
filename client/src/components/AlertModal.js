import React from "react"
import { Button, Modal } from "react-bootstrap"

function AlertModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Limo"
          }}
        >
          {props.alertDetails.title}
        </h4>
      </Modal.Body>
      <Modal.Footer>
        {props.alertDetails.add == true ? <Button onClick={() => window.location.reload(false)}>Add</Button> : ""}
        {props.alertDetails.back ? <Button onClick={() => window.location.assign(props.alertDetails.back)}>Close</Button> : ""}
        {props.alertDetails.ok == true ? <Button onClick={props.onHide}>OK</Button> : ""}
      </Modal.Footer>
    </Modal>
  )
}

export default AlertModal
