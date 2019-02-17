import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import "./contact.css";

class Contact extends Component {
  render() {
    return (
        <React.Fragment>
          <Header />
          <div className="row">
            <div className="col s6">
              <Parallax
                bgImage={require("./images/ruger.jpg")}
                bgImageAlt="Ruger"
								strength={300}
								style={{
									margin: "11% 0 0 0",
									justifyContent: "center",
									alignItems: "center"
								}}
              >
                <div
                  style={{
                    height: "600px"
                  }}
                />
              </Parallax>
            </div>
            <div className="col s6">
              <Form />
            </div>
          </div>
          <Footer />
        </React.Fragment>
    );
  }
}

export default Contact;
