import React from "react";
import { Container } from "../../components/Grid";
// import { Parallax } from "react-parallax";
// import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Events from "../../components/Events";
// import News from "../../components/News";
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
    <div className="logo-box">
      <h5 className="logo-title">
        "Connecting Lives Through Performance and Outreach"
      </h5>
      <hr />
      {/* <Link to={"/classes"} className="waves-effect waves-light btn">
        Upcoming Classes!
      </Link> */}
    </div>
    <Events />
    {/* <News /> */}
    <Footer />
  </React.Fragment>
);
export default Home;
