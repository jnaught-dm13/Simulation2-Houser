//Create a simple class component in the Dashboard and Wizard files. For now just return a div containing the component's name from the render method.
import React, { Component } from "react";
import House from "./House";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <p> Dashboard Component</p>
        <House />
      </div>
    );
  }
}
