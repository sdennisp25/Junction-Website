import React, { Component } from "react";
import "./audition.css";

class Audition extends Component {
  milleniumClick() {
    window.open("https://www.facebook.com/junctiondanceco/", "_blank");
  }
  render() {
    return (
      <React.Fragment>
        <div className="event-box donation-box">
          <div className="row">
            <div className="col s12 m2" />
            <div className="col s12 m4">
              <span className="card-title card-text">
                <h5>Jr & Teen Auditions</h5>
                <ul>
                  <li>
                    <b>Date:</b> June 28th (Friday)
                  </li>
                  <li>
                    <b>Time: </b>TBD
                  </li>
                  <li>
                    <b>Location:</b> Millenium Dance Complex Salt Lake City
                  </li>
                  <li>
                    <b>Ages:</b> 9-14
                  </li>
                </ul>
                <h8>
                  We are excited to have Season 3 auditions, and we would love for you to be a part of it!
                </h8>
              </span>
            </div>
            <div className="col s12 m4">
              <span className="card-title card-text">
                <h5>Junction Dance Co & Junction 2 Auditions</h5>
                <ul>
                  <li>
                    <b>Date:</b> June 30th (Sunday)
                  </li>
                  <li>
                    <b>Time:</b> 11:30 AM - 5:00 PM
                  </li>
                  <li>
                    <b>Location:</b> Millenium Dance Complex Salt Lake City
                  </li>
                  <li>
                    <b>Ages:</b> 15+
                  </li>
                  <li>
                    <b>Agenda:</b>
                    <li> 11:30 AM - Registration</li>
                    <li>
                      12:00 AM - 4:00 PM - Technique, House, Tap, Contemporary,
                      and Improv
                    </li>
                    <li>3:30 PM - Registration</li>
                    <li> 4:00 - 5:00 PM - Freestyle/Breaking</li>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Audition;
