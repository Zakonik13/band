import React, { useEffect } from "react"
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
          <a style={{ textDecoration: "none" }} href="/addmerch">
            <h3 style={{ fontFamily: "Limo", fontSize: 20, color: "blue" }} className="text-center text-muted">
              Add Merch
            </h3>
          </a>
        </div>
        <div className="p-3">
          <a style={{ textDecoration: "none" }} href="/editnews">
            <h3 style={{ fontFamily: "Limo", fontSize: 20, color: "blue" }} className="text-center text-muted">
              Edit News
            </h3>
          </a>
        </div>
        <div className="p-3">
          <a style={{ textDecoration: "none" }} href="/edittour">
            <h3 style={{ fontFamily: "Limo", fontSize: 20, color: "blue" }} className="text-center text-muted">
              Edit Tour
            </h3>
          </a>
        </div>
      </Row>

      <hr />
    </Page>
  )
}

export default AdminEdit
