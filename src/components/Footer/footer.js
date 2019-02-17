import React from "react";
import "./footer.css";
// import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">The Company</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  About
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Contact
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Donate
                </a>
              </li>
            </ul>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Social Media</h5>
            <div className="logo center">
              <Link
                to="https://www.facebook.com/junctiondanceco/"
                target="_blank"
              >
                {/* <SocialIcon
                  network="facebook"
                  bgColor="teal"
                  style={{ height: 25, width: 25, margin: 5 }}
                /> */}
              </Link>
              <Link
                to="https://www.instagram.com/junctiondanceco/"
                target="_blank"
              >
                {/* <SocialIcon
                  network="instagram"
                  bgColor="teal"
                  style={{ height: 25, width: 25, margin: 5 }}
                /> */}
              </Link>
            </div>
          </div>
        </div>
        <div className="col l6 s12">
          <div className="col l12 offset-l2 s12">
            <h5 className="white-text">Thank You To Our Sponsors</h5>
            <div className="row sponsors">
              <Link to="https://slcherc.com/" target="_blank">
                <img
                  className="herc"
                  src={require("./images/herc.png")}
                  alt="The Herc"
                />
              </Link>
              <Link to="https://slcherc.com/" target="_blank">
                <img
                  className="millennium"
                  src={require("./images/millennium.png")}
                  alt="Millennium"
                />
              </Link>
              <Link to="https://slcherc.com/" target="_blank">
                <img
                  className="emotion"
                  src={require("./images/emotion.jpeg")}
                  alt="Emotion"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="logo center">© 2019 Junction Dance Co</div>
  </footer>
);

export default Footer;
