import React from "react"
import { Row } from "react-bootstrap"
//Components
import Page from "../components/Page"

const AdminEdit = () => {
  return (
    <Page title={"Media"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontFamily: "Limo",
          paddingRight: 30
        }}
      >
        <div style={{ paddingLeft: "30px" }}>Admin Edit</div>
      </div>
      <hr />

      <Row style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
        <div className="p-3">
          <a style={{ textDecoration: "none" }} href="/add-merch">
            <h3 style={{ fontFamily: "Limo", fontSize: 20, color: "blue" }} className="text-center text-muted">
              Add Merch
            </h3>
          </a>
        </div>
        <div className="p-3">
          <a style={{ textDecoration: "none" }} href="/add-tour-date">
            <h3 style={{ fontFamily: "Limo", fontSize: 20, color: "blue" }} className="text-center text-muted">
              Add Tour Date
            </h3>
          </a>
        </div>
        <div className="p-3">
          <a style={{ textDecoration: "none" }} href="/add-news">
            <h3 style={{ fontFamily: "Limo", fontSize: 20, color: "blue" }} className="text-center text-muted">
              Add News
            </h3>
          </a>
        </div>
        <div className="p-3">
          <a style={{ textDecoration: "none" }} href="/edit-about">
            <h3 style={{ fontFamily: "Limo", fontSize: 20, color: "blue" }} className="text-center text-muted">
              Edit About
            </h3>
          </a>
        </div>
      </Row>

      <hr />
    </Page>
  )
}

export default AdminEdit
