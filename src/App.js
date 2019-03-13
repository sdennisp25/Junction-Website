import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Gallery from "./pages/Gallery";
import Video from "./pages/Video";
import Performances from "./pages/Performances";
// import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/classes" component={Classes} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/videos" component={Video} />
          <Route exact path="/performances" component={Performances} />
          {/* <Route exact path="/contact" component={Contact} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
