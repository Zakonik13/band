import React, { useState } from "react"
import Page from "../components/Page"
import { Form, Button, Container } from "react-bootstrap"
import { useMutation } from "@apollo/react-hooks"
import { ADD_TOUR_DATE } from "../utils/mutations"
//Components
import BackButton from "../components/BackButton"
import AlertModal from "../components/AlertModal"

const AddTourDate = () => {
  const [addTourDate] = useMutation(ADD_TOUR_DATE)
  const [modalShow, setModalShow] = useState(false)

  let alertDetails = {
    title: "Do you want to add another tour date?",
    back: "/tour",
    add: true
  }

  const [state, setState] = useState({
    date: "",
    location: "",
    venue: "",
    link: ""
  })

  const handleAddTourDate = async () => {
    await addTourDate({
      variables: { date: state.date, location: state.location, venue: state.venue, link: state.link }
    })
    setModalShow(true)
  }

  const handleChange = event => {
    const { name, value } = event.target
    setState({
      ...state,
      [name]: value
    })
  }

  console.log(state)
  return (
    <Page title="Add Tour Date" className="p-3">
      <h1
        className="p-2"
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Limo"
        }}
      >
        Add Tour Date
      </h1>
      <hr />
      <BackButton />
      <AlertModal alertDetails={alertDetails} show={modalShow} setModalShow={setModalShow} onHide={() => setModalShow(false)} />
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px"
        }}
      >
        <div>
          <Form.Group className="mb-3">
            <Form.Label>Tour Date</Form.Label>
            <Form.Control type="date" name="date" onChange={handleChange} placeholder="Enter date..."></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control name="location" onChange={handleChange} placeholder="Enter city, state..."></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Venue</Form.Label>
            <Form.Control name="venue" onChange={handleChange} placeholder="Enter venue..."></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link</Form.Label>
            <Form.Control name="link" onChange={handleChange} placeholder="Enter ticket link..."></Form.Control>
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
        <Button onClick={handleAddTourDate} className="mb-4" variant="outline-secondary">
          Complete
        </Button>
      </div>
      <hr />
    </Page>
  )
}

export default AddTourDate
