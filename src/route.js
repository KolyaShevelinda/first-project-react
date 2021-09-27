import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginUser from "./login/loginUser";
import App from "./App";


export default function ProjectRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginUser />
        </Route>
        <Route path="/todos">
          <App />
        </Route>
      </Switch>
    </Router>
  )
}

