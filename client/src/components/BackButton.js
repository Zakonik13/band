import React from "react"
import back from "../images/back.svg"

const BackButton = () => {
  const goBack = "javascript:history.back()"
  return (
    <div className="go-back">
      <div>
        {" "}
        <a href={goBack}>
          <img
            alt="back-button"
            style={{
              height: "30px",
              marginLeft: "30px"
            }}
            src={back}
          ></img>
        </a>
      </div>
    </div>
  )
}

export default BackButton
