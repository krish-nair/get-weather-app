import React, { Component } from "react";
import Titles from "./components/titles";
import Form from "./components/form";
import Weather from "./components/weather";
import { async } from "q";

const API_KEY = "c1c34449fbcbcfc6a602baa7028303c3";

class App extends Component {
  getWeather = async e => {
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Wellington,Newzealand&appid=${API_KEY}&units=metric`
    );

    const data = await api_call.json();
    console.log(data);
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
