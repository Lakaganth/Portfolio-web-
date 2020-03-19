import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
// Components
import HomePage from "./pages/homepage/HomePage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
