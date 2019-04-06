import React from "react";
// import { Container } from "../../components/Grid";
import { Parallax, Background } from "react-parallax";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import News from "../../components/News";
import Slideshow from "../../components/Slideshow";
import Audition from "../../components/Audition";
import "./home.css";

const Home = props => (
  <React.Fragment>
    <Header />
    <Slideshow />

    {/* <Parallax
      bgImage={require("./images/junctionlogo.jpeg")}
      bgImageAlt="the crew"
      strength={650}
      bgImageSize={100}
      renderLayer={percentage => (
        <div
          style={{
            position: "absolute",
            width: "80%",
            height: "80%"
          }}
        />
      )}
    >
      <div
        style={{
          height: "550px"
        }}
      />

		</Parallax> */}
    {/* <div className="logo-box">
      <h5 className="logo-title">
        "Connecting Lives Through Performance and Outreach"
      </h5>
      <hr />
      <Link to={"/classes"} className="waves-effect waves-light btn">
        Upcoming Classes!
      </Link>
    </div> */}
    {/* <Events /> */}
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
          <button className="btn">More Details</button>
        </Link>
      </div>
    </Parallax>
    <Audition />
    <Parallax bgImageAlt="the crew" strength={350} bgImageSize={100}>
      <div
        style={{
          height: "400px",
        }}
      />
      <Background className="custom-bg donation-image">
        <img
          src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/55949862_2172770866095297_789774469177540608_o.jpg?_nc_cat=101&_nc_ht=scontent-dfw5-2.xx&oh=2e3eae43aef8cc8bfc6337fcc3ca52f1&oe=5D389A5E"
          alt="fill murray"
        />
      </Background>
    </Parallax>
    <Footer />
  </React.Fragment>
);
export default Home;
