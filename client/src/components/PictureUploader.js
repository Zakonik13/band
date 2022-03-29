import React, { useState, useRef } from "react"
import $ from "jquery"

const PictureUploader = ({ setImage }) => {
  const inputRef = useRef()
  const [src, setSRC] = useState(false)
  let picture = ""

  const handlePictureSelected = async event => {
    picture = event.target.files[0]
    var src = URL.createObjectURL(picture)

    // setPicture(picture);
    setSRC(src)
  }

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
      )
    } else {
      return
    }
  }

  const upload = () => {
    inputRef.current?.click()
    var formData = new FormData()

    formData.append("image", picture)
    var result = null
    $.ajax({
      url: "https://api.imgur.com/3/image",

      type: "POST",
      data: formData,
      headers: {
        Authorization: "Client-ID 85faf3da5c2c9ca"
      },
      cache: false,
      contentType: false,
      processData: false,
      async: false,
      success: function (response) {
          setImage(response.data.link)
      }
    })
    return result
  }

  const handleUpload = e => {
    e.preventDefault()
    inputRef.current?.click()
  }

  return (
    <div className="m-5">
      <input ref={inputRef} type="file" className="d-none" onChange={handlePictureSelected} />

      <button className="btn btn-success  " onClick={handleUpload}>
        <div>{renderPreview()}</div>
        Add Item Image
      </button>
    </div>
  )
}

export default PictureUploader