//Create a simple class component in the Dashboard and Wizard files. For now just return a div containing the component's name from the render method.
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import House from "./House";
import "./Dashboard.css";
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      house: []
    };
    this.removeProperty = this.removeProperty.bind(this);
  }
  componentDidMount() {
    axios.get("api/getData").then(response => {
      console.log("CDM HIT ", response.data);
      this.setState({ house: response.data });
    });
  }
  removeProperty(id) {
    axios.delete(`api/removeProperty/${id}`).then(response => {
      this.setState({ house: response.data });
      this.componentDidMount();
    });
  }
  render() {
    console.log(this.state.house);
    const homes = this.state.house.map((e, i) => {
      return (
        <House
          removeProperty={this.removeProperty}
          key={e.id}
          name={e.name}
          address={e.address}
          city={e.city}
          state={e.state}
          zip={e.zip}
          id={e.id}
        />
      );
    });
    return (
      <div className="dashboard-main">
        <p> Dashboard </p>
        <Link className="" to="/wizard">
          <h3>Add New Property</h3>
        </Link>
        {homes}
      </div>
    );
  }
}
