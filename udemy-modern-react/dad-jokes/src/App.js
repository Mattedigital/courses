import React, { Component } from "react";
import JokeList from "./JokeList";
import "./App.css";

import "@fortawesome/fontawesome-free/css/all.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <JokeList />
      </div>
    );
  }
}

export default App;
