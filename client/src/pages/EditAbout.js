import React, { useState } from "react"
import Page from "../components/Page"
import { Button, Container } from "react-bootstrap"
import { useMutation } from "@apollo/react-hooks"
import { UPDATE_ABOUT } from "../utils/mutations"
import { GET_ABOUT } from "../utils/queries"
import { useQuery } from "@apollo/react-hooks"

//Components
import BackButton from "../components/BackButton"
import AlertModal from "../components/AlertModal"

const EditAbout = () => {
  const [modalShow, setModalShow] = useState(false)
  const { data, loading } = useQuery(GET_ABOUT)
  const [updateAbout] = useMutation(UPDATE_ABOUT)

  const [state, setState] = useState({
    body: ""
  })

  console.log(data)

  let alertDetails = {
    title: "Do you want to keep editing?",
    back: "/about",
    add: true
  }

  if (loading) {
    return ""
  }

  const handleUpdate = async () => {
    await updateAbout({
      variables: { body: state.body, id: data.about[0]._id }
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

  console.log(data)

  return (
    <Page title="Edit About" className="p-3">
      <h1
        className="p-2"
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Limo"
        }}
      >
        Edit About
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
          <div className="form-group about">
            <label>About Body</label>
            <textarea rows="10" cols="100" type="text" className="form-control aboutInput" name="body" onChange={handleChange} placeholder="Enter body..." />
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
        <Button onClick={() => handleUpdate(data._id)} className="mb-4" variant="outline-secondary">
          Complete
        </Button>
      </div>
      <hr />
    </Page>
  )
}

export default EditAbout
