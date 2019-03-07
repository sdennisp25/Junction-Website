import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import "./Header.css";

// const styles = {
//   transition: "all 1s ease-out"
// };

class Header extends Component {
  constructor() {
    super();
    this.state = {
      opacity: 1
    };
  }
  facebookClick() {
    window.open("https://www.facebook.com/junctiondanceco/", "_blank");
  }
  instagramClick() {
    window.open("https://www.instagram.com/junctiondanceco/", "_blank");
  }
  render() {
    return (
      <nav className="nav-extended">
        <div className="nav-content">
          <div className="right">
            <SocialIcon
              network="email"
              bgColor="white"
              style={{ height: 20, width: 20, margin: 3 }}
              onClick={this.facebookClick.bind(this)}
            />
            <SocialIcon
              network="facebook"
              bgColor="white"
              style={{ height: 20, width: 20, margin: 3 }}
              onClick={this.facebookClick.bind(this)}
            />
            <SocialIcon
              network="instagram"
              bgColor="white"
              style={{ height: 20, width: 20, margin: 3 }}
              onClick={this.instagramClick.bind(this)}
            />
          </div>
        </div>
        <div className="nav-wrapper">
          {/* <div className="brand-logo left">Junction Dance Co </div> */}
          <div className="brand-logo center">
            <img
              className="main-logo"
              src={require("./images/logo.png")}
              alt="The Main Logo"
              // onClick={this.hercClick.bind(this)}
            />
          </div>
          {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a> */}
          <ul className="list right hide-on-med-and-down">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/gallery"}>Gallery</Link>
            </li>
            <li>
              <Link to={"/videos"}>Videos</Link>
            </li>
            <li>
              <Link to={"/performances"}>Performances</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
