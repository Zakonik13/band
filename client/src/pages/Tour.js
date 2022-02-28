import React from "react";
// Components
import Page from "../components/Page";

const Tour = () => {
  return (
    <Page title={"Tour"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontFamily: "Limo",
        }}
      >
        <div>Tour</div>
      </div>
      <hr />
      <div className="p-5">
<<<<<<< HEAD
=======
        <h1 style={{ display: "flex", justifyContent: "center", fontSize: 35 }}>
          Tour Dates 2022
        </h1>
>>>>>>> 786fe5b9bf26d18ded1e9d6d95888c3bf7d758ca
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
  );
};

export default Tour;
