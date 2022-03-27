import React, { useState } from "react"
import Page from "../components/Page"
import { Form, Button, InputGroup, FormControl, Container } from "react-bootstrap"
import Auth from "../utils/Auth.js"
//Components
import BackButton from "../components/BackButton"
// import { ADD_MERCH } from "../utils/mutation"
// import { useMutation } from "@apollo/react-hooks"

const AddMerch = () => {
  const [state, setState] = useState({
    type: "",
    name: "",
    description: "",
    price: "",
    quantity: ""
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
    <>
      {Auth.loggedIn() ? (
        <Page title="Add Merch" className="p-3">
          <h1
            className="p-2"
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "Limo"
            }}
          >
            Add Merchandise
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
                <Form.Label>What type of product are you adding?</Form.Label>
                <Form.Select as="select" name="type" readOnly onChange={handleChange}>
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
                  padding: "15px"
                }}
              >
                <Button size="sm" variant="outline-secondary">
                  Add Image
                </Button>
              </div>

              <Form.Group className="mb-4">
                <Form.Label>Name of item</Form.Label>
                <Form.Control placeholder="Enter item name..." name="name" onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Description of item</Form.Label>
                <Form.Control placeholder="Enter item description..." name="description" onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Price of item</Form.Label>
                <InputGroup className="mb-4">
                  <InputGroup.Text>$</InputGroup.Text>
                  <FormControl onChange={handleChange} name="price" placeholder="Enter price..." />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Quantity available</Form.Label>
                <FormControl type="number" onChange={handleChange} name="quantity" placeholder="Enter quantity available..." />
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
            <Button className="mb-4" variant="outline-secondary">
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
              fontSize: "30px"
            }}
          >
            You must be logged in as admin to access this page.
          </div>
        </Page>
      )}
    </>
  )
}

export default AddMerch
