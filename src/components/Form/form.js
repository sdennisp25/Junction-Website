import React, { Component } from "react";

import "./form.css";

class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="form-box">
          <h3 className="questions">Questions?</h3>
          <form
            className="form col s12"
            method="GET"
            action="mailto:sdennisp25@hotmail.com"
            enctype="text/plain"
          >
            <div className="row">
              <div className="input-field col s6">
                <input
                  placeholder="Michael"
                  id="first_name"
                  type="text"
                  className="validate"
                />
                <span className="helper-text">First Name</span>
              </div>
              <div className="input-field col s6">
                <input
                  placeholder="Smith"
                  id="last_name"
                  type="text"
                  className="validate"
                />
                <span className="helper-text">Last Name</span>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="email@hotmail.com"
                  id="email"
                  type="email"
                  className="validate"
                />
                <span className="helper-text">Email</span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea" />
                <span className="helper-text">Message</span>
              </div>
            </div>
            <input
              type="submit"
              value="Send Message"
              class="waves-effect waves-light btn-small"
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
