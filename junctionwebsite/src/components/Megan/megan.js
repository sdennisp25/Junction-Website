import React, { Component } from "react";
import "./megan.css";
import MeganPhoto from "./images/megan1.jpg";

class Megan extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="megans-box">
				<h3>Founder</h3>
				<img src={MeganPhoto} class="megans-picture" alt="Megan" />
          <p>
            Megan Adelsberger is the Director and Founder of Junction Dance Company. She began her dance training at Elower-Sicilia
            Productions in Thurmont, Maryland and was a member of their
            performing arts company for thirteen years. During her summers she
            continued to develop her artistry at studios in New York City and
            Los Angeles. Megan attended The University of the Arts in
            Philadelphia, PA and spent two years traveling the world while
            performing on Holland America Cruise Ships. She was a featured
            dancer in Cultural Soul’s show Movement, artistically directed by
            Moncell “ill kozby” Durden. She has choreographed and danced in
            music videos for several underground artists and had her
            choreography showcased in The Eureka Dance Festival in Washington
            D.C. Megan can be found on So You Think You Can Dance during Season
            6 and 7 of “Vegas Week” and the LA Results Show. She was also on a
            Nigel Lythgoe Productions T.V. series called A Chance To Dance,
            where she had the opportunity to study under Michael Nunn and
            William Trevitt formerly of The Royal Ballet. Megan’s latest
            appearance was in a Hallmark film entitled “Dear Dumb Diary”
            choreographed by Bonnie Story. She has performed at the Capezio ACE
            Awards in New York City, Jazz Dance World Congress in Pittsburgh PA,
            and spent the past 5 years touring internationally as a company
            member with Odyssey Dance Threatre. Most recently, Megan was one of
            five producers to create, direct, choreograph, and perform in Urban
            Fairytalez’s production of “Who Are You?”. She travels to Haiti and
            instructs year round for Lovolution, a worldwide movement where love
            and self worth are brought to awareness through dance. While Megan
            is not busy performing, she continues to share her passion teaching
            and choreographing for industrials, workshops, shows, and in studios
            across the nation including Salt Lake City’s Millennium Dance
            Complex and Pioneer High School for the Performing Arts.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Megan;
