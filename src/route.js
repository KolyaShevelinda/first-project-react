import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginUser from "./login/loginUser";
import Todos from "./Todos";


export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginUser />
        </Route>
        <Route path="/todos">
          <Todos />
        </Route>
      </Switch>
    </Router>
  );
}



