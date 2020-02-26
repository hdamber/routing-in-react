import React, { Component, Fragment } from "react";
import "isomorphic-fetch";
import "es6-promise";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Films from "./Films";
import People from "./People";
import SingleFilm from "./singleFilm";
import SinglePerson from "./singlePeople";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Link to="/">
            <button
              type="button"
              class="btn btn-outline-info"
              style={{
                display: "flex",
                justifyContent: 'center'
              }}
            >
              Go Home
            </button>
          </Link>

          <Link to="/Films/">
            <button
              type="button"
              class="btn btn-outline-info"
              style={{
                display: "flex",
                justifyContent: 'center'
              }}
            >
              View Films
            </button>
          </Link>

          <Link to="/People">
            <button
              type="button"
              class="btn btn-outline-info"
              style={{
                display: "flex",
                justifyContent: 'center'
              }}
            >
              View People
            </button>
          </Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Films/" component={Films} />
            <Route path="/People" component={People} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
