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

const greyBox = {
  background: "rgb(0,0,0,0.7)",
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const greyBoxText = {
  color: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

class Home extends Component {
  ticketClick() {
    window.open(
      "https://arttix.artsaltlake.org/single/EventDetail.aspx?p=23369",
      "_blank"
    );
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Slideshow />
        <Audition />
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
          {/* <div className="show-title">
            <h3>Zero Flux</h3>
            <Link
              target="_blank"
              to={"https://www.facebook.com/events/363448040931390/"}
            >
              <button className="btn" onClick={this.ticketClick.bind(this)}>
                Get Tickets
              </button>
            </Link>
          </div> */}
        </Parallax>
        <News />
        <Parallax bgImageAlt="the crew" strength={500} bgImageSize={300}>
          <div style={{ height: 200 }}>
            <div style={greyBox} />
          </div>
          <div style={{ height: 30 }}>
            <div style={greyBoxText}>
              Where there is unity there is always victory. -Publilius Syrus
            </div>
          </div>
          <div
            style={{
              height: "150px"
            }}
          />

          <Background className="custom-bg">
            <img
              src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/51805370_2103876356318082_7433703759257010176_o.jpg?_nc_cat=108&_nc_ht=scontent-sjc3-1.xx&oh=e5ea542da020cf110054f172761a7302&oe=5D6454A2"
              alt="fill murray"
            />
          </Background>
        </Parallax>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Home;
