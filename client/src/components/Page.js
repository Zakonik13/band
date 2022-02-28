import React, { useEffect } from "react";
// Components
import Container from "./Container";

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | BlueGrass Billies`;
    window.scrollTo(0, 0);
  }, [props.title]);

  return <Container wide={props.wide}>{props.children}</Container>;
}

export default Page;
