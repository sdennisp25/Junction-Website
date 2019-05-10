import React, { Component } from "react";
import ReactPlayer from "react-player";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./video.css";

const videoStyle = {
  width: "74%",
  margin: "0"
};

class Video extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="video-box">
          <div className="row">
            <h3>Videos</h3>
            <div className="col s6">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=HXfcsjB2rdA"
                style={videoStyle}
              />
            </div>
            <div className="col s6">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=4JzeWneZjmM"
                style={videoStyle}
              />
            </div>
            <div className="row">
              <div className="col 4">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=QYXumdnedAQ"
                  style={videoStyle}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Video;
