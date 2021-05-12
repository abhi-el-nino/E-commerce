import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

import Home from "./containers/Home";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
