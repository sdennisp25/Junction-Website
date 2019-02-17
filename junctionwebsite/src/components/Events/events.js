import React from "react";
import "./events.css";
import { Link } from "react-router-dom";

const Events = props => (
  <div className="events-background">
    <div className="row event-box">
      <div className="col s12 m6">
        {/* <h3>Upcoming Show</h3> */}
        <img
          className="event-image"
          alt=""
          src={require("./images/rebirth.png")}
        />
      </div>
      <div className="col s12 m6">
        <div className="events">
          <Link
            to="https://www.google.com/maps/place/Rose+Wagner+Performing+Arts+Center/@40.7632117,-111.8978368,17z/data=!3m1!4b1!4m5!3m4!1s0x87528a55f13d8fa5:0x1c0bec6b46008e67!8m2!3d40.7632117!4d-111.8956481"
            target="_blank"
          >
            <img
              className="event-image"
              alt=""
              src={require("./images/event.png")}
            />
          </Link>
        </div>

        <Link
          to="https://www.google.com/maps/place/Rose+Wagner+Performing+Arts+Center/@40.7632117,-111.8978368,17z/data=!3m1!4b1!4m5!3m4!1s0x87528a55f13d8fa5:0x1c0bec6b46008e67!8m2!3d40.7632117!4d-111.8956481"
          target="_blank"
          className=" event-button waves-effect waves-light btn-large"
        >
          Directions
        </Link>
        <Link
          to="https://arttix.artsaltlake.org/single/EventDetail.aspx?p=22701"
          target="_blank"
          className="event-button waves-effect waves-light btn-large"
        >
          Buy Tickets
        </Link>
      </div>
    </div>
  </div>
);

export default Events;
