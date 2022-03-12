import React from "react"
import BackButton from "../components/BackButton"

const Videos = () => {
  return (
    <div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontFamily: "Limo",
          paddingTop: "40px"
        }}
      >
        Videos
      </h2>
      <hr />
      <BackButton />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "50px"
        }}
      >
        <iframe width="800" height="600" src="https://www.youtube.com/embed/55XvlFFJBH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "50px"
        }}
      >
        <iframe width="800" height="600" src="https://www.youtube.com/embed/1c4OOYp-5ic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Videos
