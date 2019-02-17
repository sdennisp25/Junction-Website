import React, { Component } from "react";
import "./footer.css";
import { SocialIcon } from "react-social-icons";

class Footer extends Component {
  facebookClick() {
    window.open("https://www.facebook.com/junctiondanceco/", "_blank");
  }
  instagramClick() {
    window.open("https://www.instagram.com/junctiondanceco/", "_blank");
  }
  hercClick() {
    window.open("https://slcherc.com/", "_blank");
  }
  millenniumClick() {
    window.open("http://mdcslc.com", "_blank");
  }
  emotionClick() {
    window.open("http://www.emotiondance.com/", "_blank");
  }

  render() {
    return (
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
                  <SocialIcon
                    network="facebook"
                    bgColor="teal"
                    style={{ height: 25, width: 25, margin: 5 }}
                    onClick={this.facebookClick.bind(this)}
                  />
                  <SocialIcon
                    network="instagram"
                    bgColor="teal"
                    style={{ height: 25, width: 25, margin: 5 }}
                    onClick={this.instagramClick.bind(this)}
                  />
                </div>
              </div>
            </div>
            <div className="col l6 s12">
              <div className="col l12 offset-l2 s12">
                <h5 className="white-text">Thank You To Our Sponsors</h5>
                <div className="row sponsors">
                  <img
                    className="herc"
                    src={require("./images/herc.png")}
                    alt="The Herc"
                    onClick={(this.hercClick.bind(this))}
                  />
                  <img
                    className="millennium"
                    src={require("./images/millennium.png")}
                    alt="Millennium"
                    onClick={this.millenniumClick.bind(this)}
                  />

                  <img
                    className="emotion"
                    src={require("./images/emotion.jpeg")}
                    alt="Emotion"
                    onClick={this.emotionClick.bind(this)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="logo center">© 2019 Junction Dance Co</div>
      </footer>
    );
  }
}

export default Footer;
