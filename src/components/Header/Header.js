import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";

import "./Header.css";

// const styles = {
//   transition: "all 1s ease-out"
// };

class Header extends Component {
  facebookClick() {
    window.open("https://www.facebook.com/junctiondanceco/", "_blank");
  }
  instagramClick() {
    window.open("https://www.instagram.com/junctiondanceco/", "_blank");
  }

  render() {
    return (
				<nav className="nav-extended">
			<Container>
				<div className="brand-logo">JUNCTION DANCE CO</div>
				<div className="brand-logo center">
					<img
						className="main-logo"
						src={require("./images/logo.png")}
						alt="The Main Logo"
						/>
				</div>
				<ul className="list right hide-on-med-and-down">
					<li>
						<Link to={"/"}>HOME</Link>
					</li>
					<li>
						<Link to={"/about"}>ABOUT</Link>
					</li>
					<li>
						<Link to={"/junction"}>JUNCTION</Link>
					</li>
					{/* <li>
						<Link to={"/gallery"}>GALLERY</Link>
					</li> */}
					<li>
						<Link to={"/videos"}>MEDIA</Link>
					</li>
				</ul>
			</Container>
				</nav>
    );
  }
}

export default Header;
