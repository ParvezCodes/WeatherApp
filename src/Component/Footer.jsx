import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  const icon = {
    fontSize: "35px",
  };

  return (
    <div className="container mb-4" style={{ backgroundColor: "white" }}>
      <footer className="text-center">
        <div className="container">

        <hr
        style={{
          width:"100%",
          background: 'black',
          color: 'black',
        }}
      />

          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p className="text-dark">
                  Creating a user-friendly weather app that delivers real-time
                  updates, accurate forecasts, and personalized alerts, making
                  it effortless for users to stay informed about the latest
                  weather conditions and plan their activities accordingly.
                </p>
              </div>
            </div>
          </section>

          <section className="text-dark mb-5">
            <a
              href="https://www.facebook.com/parvez.pathan.9889/"
              className="text-dark me-3 mx-2"
            >
              <FaFacebook style={icon} />
            </a>

            <a
              href="https://www.instagram.com/p_a_r_v_e_z_/"
              className="text-dark me-3 mx-2"
            >
              <FaInstagram style={icon} />
            </a>

            <a
              href="https://www.linkedin.com/in/parvez-pathan-947631256/"
              className="text-dark me-3 mx-2"
            >
              <FaLinkedin style={icon} />
            </a>

            <a
              href="https://github.com/ParvezCodes"
              className="text-dark me-3 mx-2"
            >
              <FaGithub style={icon} />
            </a>

            <a
              href="https://parvezcodes.netlify.app/"
              className="text-dark me-3 mx-2"
            >
              <FaHeart style={icon} />
            </a>
          </section>
        </div>

        <div
          className="text-center p-3 footer"
          style={{ backgroundColor: "black" }}
        >
          <span className="text-light">© 2023 Copyright at </span>
          <a className="text-light" href="https://parvezcodes.netlify.app/">
            ParvezCodes
          </a>
        </div>
      </footer>
    </div>
  );
}
