import React from "react";
import { GET_ABOUT } from "../utils/queries";
import { useQuery } from "@apollo/react-hooks";
// Components
import Page from "../components/Page";

const About = () => {
  const { data, loading } = useQuery(GET_ABOUT);

  if (loading) {
    return "";
  }

  console.log(data.about);

  return (
    <Page title={"About"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontFamily: "Limo",
        }}
      >
        <div>About Us</div>
      </div>
      <hr />
      <div className="p-5">
        {data.about[0].body ? (
          <p style={{ textIndent: "50px" }}>{data.about[0].body}</p>
        ) : (
          <p style={{ textIndent: "50px" }}>No Data</p>
        )}
      </div>
      <hr />
    </Page>
  );
};

export default About;
