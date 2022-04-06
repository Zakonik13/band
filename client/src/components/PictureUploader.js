import React, { useState, useRef } from "react";
import $ from "jquery";
import { Button } from "react-bootstrap";

const PictureUploader = ({ setImage }) => {
  const inputRef = useRef();
  const [src, setSRC] = useState(false);
  let picture = "";

  const handlePictureSelected = async event => {
    console.log(event.target.files[0]);
    picture = event.target.files[0];
    var src = URL.createObjectURL(picture);

    // setPicture(picture);
    setSRC(src);
    upload();
  };

  const renderPreview = () => {
    if (src) {
      return (
        <img
          alt="Image8"
          height="auto"
          width="150
      "
          src={src}
        />
      );
    } else {
      return;
    }
  };

  const upload = () => {
    console.log(picture);
    inputRef.current?.click();
    var formData = new FormData();

    formData.append("image", picture);
    var result = null;
    $.ajax({
      url: "https://api.imgur.com/3/image",

      type: "POST",
      data: formData,
      headers: {
        Authorization: "Client-ID 3bd0a7ed5554183"
      },
      cache: false,
      contentType: false,
      processData: false,
      async: false,
      success: function (response) {
        setImage(response.data.link);
      }
    });
    return result;
  };

  const handleUpload = e => {
    e.preventDefault();
    inputRef.current?.click();
  };

  return (
    <div className="m-3">
      <input
        ref={inputRef}
        type="file"
        className="d-none"
        onChange={handlePictureSelected}
      />

      <Button variant="outline-secondary" onClick={handleUpload}>
        <div>{renderPreview()}</div>
        Add Item Image
      </Button>
    </div>
  );
};

export default PictureUploader;
