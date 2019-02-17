import React from "react";
import { Container } from "../../components/Grid";
import { Parallax } from "react-parallax";
// import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Events from "../../components/Events";
import News from "../../components/News";
import "./home.css";

const Home = props => (
  <React.Fragment>
    <Header />
    <Parallax
      bgImage={require("./images/junctionlogo.jpeg")}
      bgImageAlt="the crew"
      strength={150}
      renderLayer={percentage => (
        <div
          style={{
            position: "absolute",
            background: `rgba(0,0,0,0.6)`,
            width: "100%",
            height: "100%"
          }}
        />
      )}
    >
      <div
        style={{
          height: "350px"
        }}
      />
      <div className="logo-box">
        <h5 className="logo-title">
          "Connecting Lives Through Performance and Outreach"
        </h5>
        <hr />
        {/* <Link to={"/classes"} class="waves-effect waves-light btn">
          Upcoming Classes!
        </Link> */}
      </div>
      {/* <div className="logo-header"> */}
      {/* </div> */}
    </Parallax>
    <Container>
      <Events />
      <News />
    </Container>
    <Footer />
  </React.Fragment>
);
export default Home;
