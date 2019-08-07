import React from "react";
import "./about.css";
import { Container } from "../../components/Grid";
import { Parallax } from "react-parallax";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Megan from "../../components/Megan";

const About = props => (
  <React.Fragment>
    <Header />
    <Container>
      <div className="about">
        <h3>About Us</h3>
        <p>
          Junction Dance Company is a diverse group of talented individuals that
          came together to unite all styles of dance. Passionately driven to
          spread the love for the art of dance by performing at charity events,
          benefit concerts, parades, and competitions. We strive to create unity
          in the dance community and by connecting others who have yet to
          experience the same passion.
        </p>
      </div>
      <Parallax
        bgImage={require("./images/junctioncrew.jpeg")}
        bgImageAlt="the crew"
        strength={125}
        style={{
          margin: "1% 0 0 0"
        }}
      >
        <div
          style={{
            height: "400px",
            width: "500px"
          }}
        />
      </Parallax>
      <div className="row">
        <div className="col s7">
          <Parallax
            bgImage={require("./images/kids2.png")}
            bgImageAlt="the crew"
            strength={125}
            style={{
              margin: "1% 0 0 0"
            }}
          >
            <div
              style={{
                height: "300px"
              }}
            />
          </Parallax>
        </div>
        <div className="col s5">
          <Parallax
            bgImage={require("./images/junction2.jpg")}
            bgImageAlt="the crew"
            strength={100}
            style={{
              margin: "1% 0 0 0",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                height: "300px"
              }}
            />
          </Parallax>
        </div>
      </div>
      <Megan />
    </Container>
    <Footer />
  </React.Fragment>
);

export default About;
