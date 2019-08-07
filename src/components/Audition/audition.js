import React, { Component } from "react";
import "./audition.css";

class Audition extends Component {
  milleniumClick() {
    window.open("https://www.facebook.com/junctiondanceco/", "_blank");
  }
  render() {
    return (
      <React.Fragment>
        <div className="event-box audition-box">
          <div className="row">
            <div className="col s12 m2" />
            <div className="col s12 m4">
              <div className=" audition-border">
                <span className="card-title">
                  <h5>Breaking & Freestyle Artist Auditions</h5>
                  <h5>----------- Sunday June 30, 2019 ----------</h5>
                  <hr />
                  <ul>
                    <li>
                      <b>Registration: </b>3:30 PM - 4:00 PM
                    </li>
                    <li>
                      <b>Audition: </b>4:00 PM - 5:00 PM
                    </li>
                    <li>
                      <b>Location:</b> Millenium Dance Complex Salt Lake City
                    </li>
                    <li>
                      <b>Ages:</b> 9-14
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="col s12 m4">
              <div className=" audition-border">
                <span className="card-title">
                  <h5>Junction Co & Junction 2 Auditions</h5>
                  <h5>----------- Sunday June 30, 2019 ----------</h5>
                  <hr />
                  <ul>
                    <li>
                      <b>Time:</b> 11:30 AM - 5:00 PM
                    </li>
                    <li>
                      <b>Location:</b> Millenium Dance Complex Salt Lake City
                    </li>
                    <li>
                      <b>Ages:</b> 15+
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Audition;
