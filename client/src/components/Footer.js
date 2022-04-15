import React from "react";
// import { Link } from "react-router-dom"
import { SocialIcon } from "react-social-icons";
import Auth from "../utils/Auth";

const Footer = () => {
  return (
    <div className="footer-content">
      <footer className="text-center small text-muted ">
        <div className="mb-2">
          <SocialIcon className="social m-1" url="https://www.linkedin.com/" />
          <SocialIcon className="social m-1" url="https://www.facebook.com" />
          <SocialIcon className="social m-1" url="https://instagram.com/" />
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
        {!Auth.loggedIn() ? (
          <small>
            <p>
              <a
                style={{ textDecoration: "none" }}
                href="/admin"
                className="text-muted"
              >
                Admin Log In
              </a>
            </p>
          </small>
        ) : (
          ""
        )}
      </footer>
    </div>
  );
};

export default Footer;
