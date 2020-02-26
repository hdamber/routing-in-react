import React, { Component, Fragment } from "react";

class Films extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(film => this.setState({ films: film }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Fragment>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {this.state.films.map((film, key) => (
            <div
              id={key}
              className="card"
              style={{
                width: "500px",
                margin: "20px",
                padding: "5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div className="card-title">
                <h3>{film.title}</h3>
              </div>
              <div className="card-text">
                <p>{film.description}</p>
              </div>
              <div className="card-text">
                <p>{film.director}</p>
              </div>
              <div className="card-text">
                <p>{film.producer}</p>
              </div>
              <div className="card-text">
                <p>{film.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Films;
