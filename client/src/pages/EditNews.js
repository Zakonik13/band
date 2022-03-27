import React, { useState } from "react"
import Page from "../components/Page"
import { Form, Button, InputGroup, FormControl, Container } from "react-bootstrap"
//Components
import BackButton from "../components/BackButton"

const EditNews = () => {
  const [state, setState] = useState({
    title: "",
    body: ""
  })

  const handleChange = event => {
    const { name, value } = event.target
    setState({
      ...state,
      [name]: value
    })
  }

  console.log(state)

  return (
    <Page title="Edit News" className="p-3">
      <h1
        className="p-2"
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Limo"
        }}
      >
        Edit News
      </h1>
      <hr />
      <BackButton />

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
            <Form.Control name="date" onChange={handleChange} placeholder="Enter date..."></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>News Title</Form.Label>
            <Form.Control name="title" onChange={handleChange} placeholder="Enter title..."></Form.Control>
          </Form.Group>

          <div className="form-group about">
            <label>News Body</label>
            <textarea rows="4" type="text" className="form-control aboutInput" name="body" onChange={handleChange} placeholder="Enter body..." />
          </div>
        </div>
      </Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px"
        }}
      >
        <Button className="mb-4" variant="outline-secondary">
          Complete
        </Button>
      </div>
      <hr />
    </Page>
  )
}

export default EditNews
