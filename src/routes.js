import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Wizard from "./Component/Wizard";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/wizard" component={Wizard} />
  </Switch>
);
