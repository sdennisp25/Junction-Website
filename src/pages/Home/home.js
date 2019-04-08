import React, { Component } from "react";
// import { Container } from "../../components/Grid";
import { Parallax, Background } from "react-parallax";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import News from "../../components/News";
import Slideshow from "../../components/Slideshow";
import Audition from "../../components/Audition";
import "./home.css";

class Home extends Component {
  eventClick() {
    window.open("https://www.facebook.com/events/363448040931390/", "_blank");
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Slideshow />
        <News />
        <Parallax bgImageAlt="the crew" strength={350} bgImageSize={100}>
          <div
            style={{
              height: "500px"
            }}
          />
          <Background className="custom-bg">
            <img
              src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/55865183_2174108532628197_6500894947703521280_n.jpg?_nc_cat=103&_nc_ht=scontent-dfw5-2.xx&oh=29b0c573a5018b0952a27642a3bcc30c&oe=5D4BF6C1"
              alt="fill murray"
            />
          </Background>
          <div className="show-title">
            <h3>Zero Flux</h3>
            <Link
              target="_blank"
              to={"https://www.facebook.com/events/363448040931390/"}
            >
              <button className="btn" onClick={this.eventClick.bind(this)}>
                More Details
              </button>
            </Link>
          </div>
        </Parallax>
        <Audition />
        <Parallax bgImageAlt="the crew" strength={300} bgImageSize={100}>
          <div
            style={{
              height: "600px"
            }}
          />

          <Background className="custom-bg">
            <img
              src="https://scontent.fslc1-2.fna.fbcdn.net/v/t1.0-9/55949862_2172770866095297_789774469177540608_o.jpg?_nc_cat=101&_nc_ht=scontent.fslc1-2.fna&oh=be6c4041cf1c8940e699cd8417c26c3e&oe=5D389A5E"
              alt="fill murray"
            />
          </Background>
					<div className="donation-image" />

        </Parallax>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Home;
