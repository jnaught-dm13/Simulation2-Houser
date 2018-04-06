import React, { Component } from "react";
import "./App.css";
import routes from "./routes";

// import Dashboard from "./Component/Dashboard";
// import Wizard from "./Component/Wizard";
import Header from "./Component/Header";

class App extends Component {
  render() {
    return (
      <div className="app-main">
        <div>
          <div className="app-header">
            <Header />
          </div>
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
