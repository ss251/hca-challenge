import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import All from "../pages/All";
import Covid from "../pages/Covid";
import NotExist from "./NotExist";

// routing to components
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Covid} />
      <Route exact path="/all" component={All} />
      <Route component={NotExist} />
    </Switch>
  </BrowserRouter>
);

export default Router;
