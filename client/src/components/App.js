import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Register from "./Register";
import SignIn from "./SignIn";
import Welcome from "./Welcome";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <div className="vh-100 bg-dark text-light ">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/signout">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
