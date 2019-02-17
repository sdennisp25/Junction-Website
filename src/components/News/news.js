import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./news.css";

class News extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>News</h3>

        <div className="event-box">
          <div className="row">
            <div className="col s12 m3">
              <div className="card card-news">
                <h6 className="card-title">Smith's Grocery</h6>

                <div className="card-content">
                  <p>
                    We are excited to announce that we have partnered with
                    Smith's for donations! Sign up and/or register for a Smith's
                    Rewards Card, and a percentage of your purchaces will go
                    towards Junction Dance Co!
                  </p>
                </div>
                <div className="card-action">
                  {/* <Link href="#">Learn more</Link> */}
                </div>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="card card-news">
                <h6 className="card-title">Suprise</h6>

                <div className="card-content">
                  <p>
                    We have a big surprise coming up in the near future! We
                    cannot wait to share this with you all.
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="card card-upcoming">
                <h6 className="card-title">Zero Flux</h6>
                <div className="card-content">
                  <ul>
                    <li>June something</li>
                    <li>Somewhere cool</li>
                    <li>At a cool time</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="card card-upcoming">
                <h6 className="card-title">Card Title</h6>
                <div className="card-content">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
