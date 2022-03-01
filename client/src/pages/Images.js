import React from "react"
import { Button } from "react-bootstrap"

const Images = () => {
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
        Images
      </h2>
      <hr />
      <div className="go-back">
        <Button className="" variant="secondary" href="/media" size="sm">
          Go Back
        </Button>
      </div>
    </div>
  )
}

export default Images
