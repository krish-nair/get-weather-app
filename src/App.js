import React, { Component } from "react";
import Titles from "./components/titles";
import Form from "./components/form";
import Weather from "./components/weather";

class App extends Component {
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
