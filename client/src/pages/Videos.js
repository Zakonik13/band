import React from "react"
//Components
import Page from "../components/Page"
import BackButton from "../components/BackButton"

const Videos = () => {
  const videos = [
    { title: "Bluegrass Boogie Live @ Bonnaroo", date: "January 2016", source: "https://www.youtube.com/embed/55XvlFFJBH4" },
    { title: "Matelot Live @ Madison Square Garden", date: "July 2018", source: "https://www.youtube.com/embed/1c4OOYp-5ic" }
  ]

  return (
    <Page title={"Videos"}>
      <div>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: 35,
            fontFamily: "Limo",
            paddingTop: "20px"
          }}
        >
          Videos
        </h2>
        <hr />
        <BackButton />

        <h5
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: 25,
            fontFamily: "Limo"
          }}
        >
          {videos[0].title}, {videos[0].date}
        </h5>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "30px"
          }}
        >
          <iframe width="800" height="600" src={videos[0].source} title={videos[0].title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <h5
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: 25,
            fontFamily: "Limo"
          }}
        >
          {videos[1].title}, {videos[1].date}
        </h5>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "30px"
          }}
        >
          <iframe width="800" height="600" src={videos[1].source} title={videos[1].title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </Page>
  )
}

export default Videos
