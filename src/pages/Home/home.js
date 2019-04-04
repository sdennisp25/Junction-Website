import React from "react";
// import { Container } from "../../components/Grid";
import { Parallax, Background } from "react-parallax";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import News from "../../components/News";
import Slideshow from "../../components/Slideshow";
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
    <Parallax
      // bgImage={require("./images/junctionlogo.jpeg")}
      bgImageAlt="the crew"
      strength={150}
      bgImageSize={100}
      renderLayer={percentage => (
        <div
          style={{
            position: "absolute",
            width: "80%",
            height: "100%",
            margin: "10%"
          }}
        />
      )}
    >
      <div
        style={{
          height: "550px"
        }}
      />
      <Background className="custom-bg">
        <img
          src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/55865183_2174108532628197_6500894947703521280_n.jpg?_nc_cat=103&_nc_ht=scontent-dfw5-2.xx&oh=29b0c573a5018b0952a27642a3bcc30c&oe=5D4BF6C1"
          alt="fill murray"
        />
      </Background>
      <div className="news-title">
        <h3>Coming Soon!</h3>

      </div>
    </Parallax>
    <Footer />
  </React.Fragment>
);
export default Home;
