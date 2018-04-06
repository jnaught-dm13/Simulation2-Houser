//Create a simple class component in the Dashboard and Wizard files. For now just return a div containing the component's name from the render method.
import React, { Component } from "react";
import axios from "axios";
import House from "./House";
import "./Dashboard.css";
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      house: []
    };
  }
  componentDidMount() {
    axios.get("api/getData").then(response => {
      console.log("CDM HIT ", response.data);
      this.setState({ house: response.data });
    });
  }
  render() {
    console.log(this.state.house);
    const homes = this.state.house.map((e, i) => {
      return (
        <div className="dashboard-list" key={i}>
          <div className="property-list">
            <div className="button-delete">
              <button>X</button>
            </div>
            <div>
              <p>Property Name: {e.name}</p>
              <br />
              <p>Address: {e.address}</p>
              <br />
              <p>City: {e.city}</p>
              <br />
              <p>State: {e.state}</p>
              <br />
              <p>Zip: {e.zip}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <p> Dashboard Component</p>
        {homes}
        <House />
      </div>
    );
  }
}
