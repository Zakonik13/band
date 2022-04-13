import React from "react";
import Page from "../components/Page";

const Success = () => {
  return (
    <Page title={"About"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
        }}
      ></div>
      <hr />
      <div className="p-5">
        <p
          style={{
            textIndent: "50px",
            textAlign: "center",
            fontSize: "95px",
            fontFamily: "Bluegrass",
          }}
        >
          Successful Transaction! Thanks for your support!
        </p>
      </div>
      <hr />
    </Page>
  );
};

export default Success;
