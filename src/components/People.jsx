import React, { Component, Fragment } from "react";

class People extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          people: []
        };
      }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/People")
      .then(res => res.json())
      .then(person => this.setState({ people: person }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Fragment>
        <h2>People of Studio Ghibli Movies</h2>
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          {this.state.people.map((person, key) => (
            <div
              id={key}
              className="card" id="card"
            >
              <div className="card-title">
                <h3>{person.name}</h3>
              </div>
              <div className="card-text">
                <p>{person.age}</p>
              </div>
              {/* <div className="card-text">
                <p>{person.gender}</p>
              </div>
              <div className="card-text">
                <p>{person.eye_color}</p>
              </div>
              <div className="card-text">
                <p>{person.hair_color}</p>
              </div> */}
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default People;
