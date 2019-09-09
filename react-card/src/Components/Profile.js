import React, { Component } from "react";
import data from "./Data";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      data: data
    };
  }

  render() {
    let index = this.state.index;
    return (
      <div className="card">
        <div>
          <h1 className="name">
            {this.props.data[this.props.index].name.first}{" "}
            {this.props.data[this.props.index].name.last}
          </h1>
          <span className="emphasis">From:</span>{" "}
          {this.props.data[this.props.index].city},{" "}
          {this.props.data[this.props.index].country}
          <br />
          <span className="emphasis">Job Title:</span>{" "}
          {this.props.data[this.props.index].title}
          <br />
          <span className="emphasis">Employer:</span>{" "}
          {this.props.data[this.props.index].employer}
          <p />
          <span className="emphasis">Favorite Movies:</span>
          <ol>
            <li>{this.props.data[this.props.index].favoriteMovies[0]}</li>
            <li>{this.props.data[this.props.index].favoriteMovies[1]}</li>
            <li>{this.props.data[this.props.index].favoriteMovies[2]}</li>
          </ol>
        </div>
        <div>
          <h3 className="number">{this.props.index + 1}/25</h3>
        </div>
      </div>
    );
  }
}

export default Profile;
