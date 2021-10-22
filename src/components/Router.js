import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import All from "../pages/All";
import Covid from "../pages/Covid";
import App from "./App";
import NotExist from "./NotExist";

// routing to components
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/all" component={All} />
      <Route exact path="/covid" component={Covid} />
      <Route component={NotExist} />
    </Switch>
  </BrowserRouter>
);

export default Router;
