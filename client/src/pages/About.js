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
  console.log(data);
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
        {data.about.length ? (
          <p style={{ textIndent: "50px" }}>{data.about[0].body}</p>
        ) : (
          <p style={{ textIndent: "50px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus
            purus, aliquam nec sem euismod, pellentesque dignissim libero.
            Vestibulum eget accumsan neque. Sed eu ligula ac ligula feugiat
            congue. Sed consequat iaculis sodales. Proin finibus finibus odio id
            commodo. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nam sit amet dui massa. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Phasellus dolor nibh, cursus eu
            porta vel, tincidunt ac nisl. Morbi auctor vitae ipsum eu pulvinar.
          </p>
        )}
      </div>
      <hr />
    </Page>
  );
};

export default About;
