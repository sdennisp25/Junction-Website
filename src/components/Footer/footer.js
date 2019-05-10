import React, { Component } from "react";
import { Link } from "react-router-dom";
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
			<React.Fragment>
				<footer className="footer">
					<div className="container">
						<div className="row">
							<div className="col l3 s12">
							<h5 className="white-text">Our Mission</h5>
								<ul>
									<li className="non-prof">
										<b>JUNCTION DANCE CO</b> is a 501(c)3 non profit
										organization with a mission to connect lives through
										performance and outreach.
									</li>
								</ul>
							</div>
							<div className="col l2 s12">
								<h5 className="white-text">Our Company</h5>
								<ul>
									<li>
										<Link to={"junction"}>Junction Co</Link>
									</li>
									<li>
										<Link to={"junction"}>Junction 2</Link>
									</li>
									<li>
										<Link to={"junction"}>Jr. Junction</Link>
									</li>
								</ul>
							</div>
							<div className="col l2 s12">
								<h5 className="white-text">Our Sponsors</h5>
								<ul>
									<li>
										<div onClick={this.hercClick.bind(this)}>The Herc</div>
									</li>
									<li>
										<div onClick={this.millenniumClick.bind(this)}>Millennium DCSLC</div>
									</li>
									<li>
										<div onClick={this.emotionClick.bind(this)}>Emotion Dance</div>
									</li>
								</ul>
							</div>
							<div className="col l2 s12">
								<h5 className="white-text">Involvement</h5>
								<ul>
									<li>
										<Link to={"junction"}>Donate</Link>
									</li>
									<li>
										<Link to={"junction"}>Become Sponsor</Link>
									</li>
									<li>
										<Link to={"junction"}>Events</Link>
									</li>
								</ul>
							</div>
							<div className="col l3 s12">
								<h5 className="white-text">Connect With Us</h5>
								<ul>
									<li>
										<SocialIcon
											network="facebook"
											bgColor="teal"
											style={{ height: 25, width: 25, margin: 5 }}
											onClick={this.facebookClick.bind(this)}
											/> Facebook
										<SocialIcon
											network="instagram"
											bgColor="teal"
											style={{ height: 25, width: 25, margin: 5 }}
											onClick={this.instagramClick.bind(this)}
											/> Instagram
									</li>
									<li>
										<SocialIcon
											network="email"
											bgColor="teal"
											style={{ height: 25, width: 25, margin: 5 }}
										/> JunctionDanceCo@Gmail.com
									</li>
								</ul>
							</div>
							{/* <div className="col l4 s12">
								<h5 className="white-text">Who We Are</h5>
								<ul>
									<li className="non-prof">
										<b>JUNCTION DANCE CO</b> is a 501(c)3 non profit
										organization with a mission to connect lives through
										performance and outreach.
									</li>
								</ul>
							</div> */}
							{/* <div className="col l6 s12">
								<div className="col l12 offset-l2 s12">
									<h5 className="white-text">Thank You To Our Sponsors</h5>
									<div className="row sponsors">
										<img
											className="herc"
											src={require("./images/herc.png")}
											alt="The Herc"
											onClick={this.hercClick.bind(this)}
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
							</div> */}
						</div>
					</div>

					<div className="logo center">
						© 2019 Junction Dance Co - All Rights Reserved
					</div>
				</footer>
			</React.Fragment>

    );
  }
}

export default Footer;
