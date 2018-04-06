import React, { Component } from "react";
import { connect } from "react-redux";

class WizardOne extends Component {
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
    const { name, address, city, state, zip } = this.props;
    axios
      .post(`api/addProperty`, { name, address, city, state, zip })
      .then(response => console.log(response.data))
      .catch(console.log);
    this.props.history.push("/");
    console.log(this.props);
  }

  render() {
    return (
      <div>
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
        <button onClick={this.addProperty}>Complete</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    name,
    address,
    city,
    state,
    zip
  };
}

connect(mapStateToProps);
