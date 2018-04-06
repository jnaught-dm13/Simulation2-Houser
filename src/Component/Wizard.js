//Create a simple class component in the Dashboard and Wizard files. For now just return a div containing the component's name from the render method.
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
    this.addProperty = this.addProperty.bind(this);
  }
  addProperty() {
    const { name, address, city, state, zip } = this.state;
    axios
      .post(`api/addProperty`, { name, address, city, state, zip })
      .then(response => console.log(response.data))
      .catch(console.log);
    this.props.history.push("/");
    console.log(this.props);
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <Link className="" to="/">
            <h3>Cancel</h3>
          </Link>
        </div>
        <p> Add New Listing</p>
        <p> Property Name</p>
        <input onChange={e => this.setState({ name: e.target.value })} />
        <p>Address</p>
        <input onChange={e => this.setState({ address: e.target.value })} />
        <p>City</p>
        <input onChange={e => this.setState({ city: e.target.value })} />
        <p>State</p>
        <input onChange={e => this.setState({ state: e.target.value })} />
        <p>Zip</p>
        <input onChange={e => this.setState({ zip: e.target.value })} />
        <br />

        <button onClick={this.addProperty}>Complete</button>
      </div>
    );
  }
}
