import React from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import LoginUser from "./login/loginUser";


export default function Routing() {
    return (
        <Router>
            <Switch>
                <Route path = "/login">
                    <LoginUser/>
                </Route>
            </Switch>
        </Router>
    )
}