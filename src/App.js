import React, { Component } from "react";
import "./App.css";

import Dashboard from "./Component/Dashboard";
import Wizard from "./Component/Wizard";
import Header from "./Component/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
        <Wizard />
      </div>
    );
  }
}

export default App;
