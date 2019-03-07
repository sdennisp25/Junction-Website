import React from "react";
import { Container } from "../../components/Grid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./gallery.css";

const Gallery = props => (
  <React.Fragment>
    <Header />
    <div className="gallery-box">
      <Container>
        <h3>Gallery</h3>
      </Container>
      <div className="gallery">
        <div className="row">
          <div className="col s12 m3">
            <div className="card card-gallery">
              <div className="image1" />
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card card-gallery">
              <div className="image2" />
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card card-gallery">
              <div className="image3" />
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card card-gallery">
              <div className="image4" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3">
            <div className="card card-gallery">
              <div className="image5" />
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card card-gallery">
              <div className="image6" />
            </div>
          </div>
          {/* <div className="col s12 m3">
            <div className="card card-gallery">
              <div className="image7" />
            </div>
          </div> */}
          <div className="col s12 m3">
            <div className="card card-gallery">
              <div className="image8" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </React.Fragment>
);

export default Gallery;
