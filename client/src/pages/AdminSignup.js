import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
// import Auth from "../utils/Auth";
// import { useMutation } from "@apollo/client";
// import { ADD_ADMIN } from "../utils/mutations";

// Components
import Page from "../components/Page";

const AdminSignup = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  // const [addAdmin, { error }] = useMutation(ADD_ADMIN);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   const { data } = await addAdmin({ variables: { ...formState } });
    //   Auth.login(data.addAdmin.token);
    // } catch (e) {
    //   console.error(e);
    // }
  };

  return (
    <Page title="Admin">
      <div className="center">
        <form className="form-box" onSubmit={handleFormSubmit}>
          <div>
            <Row className="pos">
              <label>Admin Email</label>
              <input
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
            </Row>
            <br />
            <Row className="pos">
              <label>Admin Password</label>
              <input
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
            </Row>
            <br />
            <Row>
              <Button type="submit">Signup</Button>
            </Row>
            {/* {error && <div>Sign up failed</div>} */}
          </div>
        </form>
      </div>
    </Page>
  );
};

export default AdminSignup;
