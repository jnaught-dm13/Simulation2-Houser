//Create a simple class component in the Dashboard and Wizard files. For now just return a div containing the component's name from the render method.
import React, { Component } from "react";
import axios from "axios";
import House from "./House";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state -
      {
        house: []
      };
  }
  componentDidMount() {
    axios.get("api/getData").then(response => {
      console.log(response);
    });
  }
  render() {
    return (
      <div>
        <p> Dashboard Component</p>
        <House />
      </div>
    );
  }
}
