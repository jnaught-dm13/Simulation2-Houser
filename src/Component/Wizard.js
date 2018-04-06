//Create a simple class component in the Dashboard and Wizard files. For now just return a div containing the component's name from the render method.
import React, { Component } from "react";

export default class Wizard extends Component {
  render() {
    return (
      <div>
        {" "}
        <p> Wizard Component</p>
      </div>
    );
  }
}
