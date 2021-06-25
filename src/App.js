import React from "react"
import './App.css';
import { Switch, Route } from "react-router-dom"
import Surface1 from "./pages/surface1"
import Surface4 from "./pages/surface4";
import Surface7 from "./pages/surface7";

function App() {
  return (
    <Switch>
      <Route exact path="/surface4" component={Surface4} />
      <Route exact path="/surface7" component={Surface7} />
      <Route exact path="/" component={Surface1} />
    </Switch>
  );
}

export default App;
