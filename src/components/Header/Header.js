import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const styles = {
  transition: "all 1s ease-out"
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      opacity: 1
    };
  }



  fade() {
    this.setState({
      opacity: 1
    });
  }
  render() {
    return (
      <div>
        <nav>
          <div
            className="nav-wrapper"
						style={{ ...styles, opacity: this.state.opacity }}
						onScroll={this.handleScroll}
          >
            <div className="brand-logo left">Junction Dance Co</div>
            <ul className="list right hide-on-med-and-down">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                {/* <Link to={"/classes"}>Classes</Link> */}
              </li>
              <li>
                <Link to={"/gallery"}>Gallery</Link>
              </li>
              <li>
                {/* <Link to={"/contact"}>Contact</Link> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
