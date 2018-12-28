import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AddUser from "./user/AddUser";
import Claim from "./claims/Claim";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/add" component={AddUser} />
      <Route exact path="/claim" component={Claim} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
