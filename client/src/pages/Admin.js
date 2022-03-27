import React, { useState } from "react"
import { Row, Button } from "react-bootstrap"
import Auth from "../utils/Auth.js"
import { useMutation } from "@apollo/react-hooks"
import { LOGIN_ADMIN } from "../utils/mutations"
// Components
import Page from "../components/Page"

const Admin = () => {
  const [formState, setFormState] = useState({ email: "", password: "" })
  const [login, { error }] = useMutation(LOGIN_ADMIN)

  const handleChange = event => {
    const { name, value } = event.target

    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleFormSubmit = async event => {
    event.preventDefault()

    try {
      const { data } = await login({
        variables: { ...formState }
      })

      Auth.login(data.login.token)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Page title="Admin">
      <div className="center">
        <form className="form-box" onSubmit={handleFormSubmit}>
          <div>
            <Row className="pos">
              <label>Admin Email</label>
              <input name="email" type="email" id="email" value={formState.email} onChange={handleChange} />
            </Row>
            <br />
            <Row className="pos">
              <label>Admin Password</label>
              <input name="password" type="password" id="password" value={formState.password} onChange={handleChange} />
            </Row>
            <br />
            <Row>
              <Button type="submit">Login</Button>
            </Row>
            {/* {error && <div>Login failed</div>} */}
          </div>
        </form>
      </div>
    </Page>
  )
}

export default Admin
