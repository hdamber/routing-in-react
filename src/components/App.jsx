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
          <div id="header"
            style={{
              backgroundColor: "lightblue",
              backgroundPosition: 'center',
              height: "200px",
              margin: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
              <div id="ghibli">
              </div>
            <div id="buttons"
            >
              <Link to="/">
                <button
                  type="button"
                  class="btn btn-light"
                  style={{ margin: "10px" }}
                >
                  Go Home
                </button>
              </Link>

              <Link to="/Films/">
                <button
                  type="button"
                  class="btn btn-light"
                  style={{ margin: "10px" }}
                >
                  View Films
                </button>
              </Link>

              <Link to="/People">
                <button
                  type="button"
                  class="btn btn-light"
                  style={{ margin: "10px" }}
                >
                  View People
                </button>
              </Link>
            </div>
            </div>
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
