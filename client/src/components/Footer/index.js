import React from "react"
// import { Link } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

const Footer = () => {
  return (
    <div className="footer-content">
      <footer className="text-center small text-muted ">
        <div className="pb-2">
          <SocialIcon className="social m-1" url="https://www.linkedin.com/in/alexlehr" />
          <SocialIcon className="social m-1" url="https://www.facebook.com/alex.lehr.75" />
          <SocialIcon className="social m-1" url="https://github.com/alehr45" />
        </div>
        <small>
          <p className="m-0">
            Copyright &copy; 2022{" "}
            <a href="/" to="/" className="text-muted">
              BlueGrass Billies
            </a>
            . All rights reserved.
          </p>
        </small>
      </footer>
    </div>
  )
}

export default Footer
