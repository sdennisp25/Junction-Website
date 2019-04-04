import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./news.css";

class News extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="event-box event-news">
          <div className="row">
            <div className="col s12 m4">
              <div className="news-title">
                <h5 className="statement">"Connecting Lives Through Performance and Outreach"</h5>
                <Link to={"/classes"} className="waves-effect waves-light btn">
                  Upcoming Classes!
                </Link>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card card-news">
                <div className="first">
                  <span className="card-title card-text">
                    {/* <h8>
                      We are excited to announce that we have partnered with
                      Smith's for donations! Sign up and/or register for a
                      Smith's Rewards Card, and a percentage of your purchaces
                      will go towards Junction Dance Co!
                    </h8> */}
                  </span>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card card-news">
                <div className="second">
                  <span className="card-title card-title-news">
                    {/* We are throwing it back with another show! Stay tuned for
                    more information! */}
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="col s12 m4">
              <div className="card card-news">
                <div className="third">
                  <span className="card-title card-text">
                    <h4>Smiths</h4>
                    <h8>
                      We are excited to announce that we have partnered with
                      Smith's for donations! Sign up and/or register for a
                      Smith's Rewards Card, and a percentage of your purchaces
                      will go towards Junction Dance Co!
                    </h8>
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
