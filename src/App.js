import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.compnet";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
