import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoginUser from "./login/loginUser";


export default function ProjectRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path = "/login">
                    <LoginUser/>
                </Route>
            </Switch>
        </Router>
    )
}

