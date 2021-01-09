import React, {Component, useHistory} from "react";
import './App.css';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {Link } from "react-router-dom";

import home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import Front from "./components/Front"



function App() {
  return(
    <Router>
      <Switch>
          {/* <Route  exact path ="/" component={form} /> */}
          <Route  exact path="/" component={Front} />

          <Route path="/home" component={home} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />



    </Switch>

      
      </Router>
  )
}
export default App;