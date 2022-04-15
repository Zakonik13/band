import React from "react";
import back from "../images/back.svg";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  let navigate = useNavigate();

  return (
    <div className="go-back">
      <div>
        {" "}
        <img
          alt="back-button"
          style={{
            height: "30px",
            marginLeft: "30px",
            paddingBottom: "10px",
          }}
          src={back}
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default BackButton;
