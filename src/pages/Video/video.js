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
          {/* <h3>Promo Video</h3> */}
          <ReactPlayer width="100%" url="https://vimeo.com/352186579" playing />
					<br></br>
          <div className="row">
						{/* <h3>Videos</h3> */}
            <div className="col s6">
              <ReactPlayer
                width="100%"
                url="https://www.youtube.com/watch?v=HXfcsjB2rdA"
                style={videoStyle}
              />
            </div>
            <div className="row">
              <div className="col s6">
                <ReactPlayer
                  width="100%"
                  url="https://www.youtube.com/watch?v=4JzeWneZjmM"
                  style={videoStyle}
                />
              </div>
            </div>
          </div>

          {/* <div className="col s6">
            <ReactPlayer
              width="100%"
              url="https://www.youtube.com/watch?v=QYXumdnedAQ"
              style={videoStyle}
            />
          </div> */}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Video;
