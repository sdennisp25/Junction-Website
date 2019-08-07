import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "./slideshow.css";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: require("./images/DSC00128.jpg"),
    // thumbnail: require("./images/DSC00128.jpg")
  },
  {
    original: require("./images/DSC00241.jpg"),
    // thumbnail: require("./images/DSC00241.jpg")
  },
  {
    original: require("./images/paige.jpg"),
    // thumbnail: require("./images/paige.jpg")
  },
  {
    original: require("./images/DSC00002.jpg"),
    // thumbnail: require("./images/DSC00002.jpg")
  }
];

class Slideshow extends Component {
  render() {
    return (
      <div className="slideshow">
        <ImageGallery
          items={images}
          autoPlay={true}
          showPlayButton={false}
          showFullscreenButton={false}
					showNav={false}
					showBullets={true}
					showThumbnails={false}
        />
      </div>
    );
  }
}

export default Slideshow;
