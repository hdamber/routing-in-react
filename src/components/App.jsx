import React, { Component, Fragment } from "react";
import "isomorphic-fetch";
import "es6-promise";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Films from "./Films";
import People from "./People";
import "./styles.css";
import SingleFilm from "./singleFilm";
import SinglePerson from "./singlePeople";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div id="buttons">
            <Link to="/">
              <button type="button" class="btn btn-light">
                Go Home
              </button>
            </Link>

            <Link to="/Films/">
              <button type="button" class="btn btn-light">
                View Films
              </button>
            </Link>

            <Link to="/People">
              <button type="button" class="btn btn-light">
                View People
              </button>
            </Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Films/" component={Films} />
            <Route path="/People" component={People} />
            {/* <Route path="/Films/:id" component={singleFilm} /> */}
            {/* <Route path="/People/:id" component={singlePeople} /> */}
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
