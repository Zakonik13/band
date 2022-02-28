import React from "react"
import Page from "./Page"

const Tour = () => {
  return (
    <Page title={"Tour"}>
      <div style={{ display: "flex", justifyContent: "center", fontSize: 35, fontFamily: "Limo" }}>
        <div>Tour</div>
      </div>
      <hr />
      <div className="p-5">
        <ul className="tour-list text-center" style={{ listStyleType: "none" }}>
          <li>January</li>
          <li>February</li>
          <li>March</li>
          <li>April</li>
          <li>May</li>
          <li>June</li>
          <li>July</li>
          <li>August</li>
          <li>September</li>
          <li>October</li>
          <li>November</li>
          <li>December</li>
        </ul>
      </div>
      <hr />
    </Page>
  )
}

export default Tour
