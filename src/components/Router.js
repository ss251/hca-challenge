import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotExist from "./NotExist";

// routing to components
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={NotExist} />
    </Switch>
  </BrowserRouter>
);

export default Router;
