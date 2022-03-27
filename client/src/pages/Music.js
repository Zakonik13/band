import React from "react"

//Components
import Page from "../components/Page"
import BackButton from "../components/BackButton"

const Music = () => {
  return (
    <Page title={"Music"}>
      <div>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: 45,
            fontFamily: "Limo",
            paddingTop: "20px"
          }}
        >
          Music
        </h2>
        <hr />
        <BackButton />
        <a href="/musicdetails">
          <h1
            style={{
              display: "flex",
              fontFamily: "Limo",
              justifyContent: "center",
              fontSize: 30,
              paddingBottom: 30
            }}
          >
            <strong>Hootin' and Hollerin' (2021)</strong>
          </h1>
        </a>

        <a href="/musicdetails">
          <h1
            style={{
              display: "flex",
              fontFamily: "Limo",
              justifyContent: "center",
              fontSize: 30,
              paddingBottom: 30
            }}
          >
            <strong>Twangalang (2019)</strong>
          </h1>
        </a>
        <a href="/musicdetails">
          <h1
            style={{
              display: "flex",
              fontFamily: "Limo",
              justifyContent: "center",
              fontSize: 30,
              paddingBottom: 30
            }}
          >
            <strong>Bluegrass Billies (2017)</strong>
          </h1>
        </a>
        <hr />
      </div>
    </Page>
  )
}

export default Music
