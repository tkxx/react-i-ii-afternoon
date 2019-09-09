import React, { Component } from "react";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import data from "./Components/Data";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: data,
      index: 0
    };
  }

  clickNext = () => {
    let index = this.state.index;
    if (this.state.index >= data.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: index + 1 });
    }
  };

  clickPrevious = () => {
    let index = this.state.index;
    if (this.state.index === 0) {
      this.setState({ index: this.state.data.length - 1 });
    } else {
      this.setState({ index: index - 1 });
    }
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Profile index={this.state.index} data={this.state.data} />
        <div className="buttons">
          <button className="handleButtons" onClick={this.clickPrevious}>
            {" "}
            {"<"} Previous{" "}
          </button>
          <button className="handleButtons" onClick={this.clickNext}>
            {" "}
            Next{">"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
