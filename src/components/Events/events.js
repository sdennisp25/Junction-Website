import React, { Component } from "react";
import "./events.css";

class Events extends Component {
  roseWagnerClick() {
    window.location.assign(
      "https://www.google.com/maps/place/Rose+Wagner+Performing+Arts+Center/@40.7632117,-111.8978368,17z/data=!3m1!4b1!4m5!3m4!1s0x87528a55f13d8fa5:0x1c0bec6b46008e67!8m2!3d40.7632117!4d-111.8956481"
    );
  }
  arttixClick() {
    window.location.assign(
      "https://arttix.artsaltlake.org/single/EventDetail.aspx?p=22701"
    );
  }

  render() {
    return (
      <div className="events-background">
        <div className="row event-box">
          <div className="col s12 m6">
            <img
              className="event-image"
              alt=""
              src={require("./images/rebirth.png")}
            />
          </div>
          <div className="col s12 m6">
            <div className="events">
              <img
                className="event-image"
                alt=""
                src={require("./images/event.png")}
                onClick={this.roseWagnerClick.bind(this)}
              />
            </div>

            <button
              className=" event-button waves-effect waves-light btn-large"
              onClick={this.roseWagnerClick.bind(this)}
            >
              Directions
            </button>

            <button
              className="event-button waves-effect waves-light btn-large"
              onClick={this.arttixClick.bind(this)}
            >
              Buy Tickets
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
