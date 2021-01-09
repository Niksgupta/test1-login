import React from "react";
import './App.css';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Darkmode from "darkmode-js";
import { hashHistory } from 'react-router-dom';
import { withRouter } from 'react-router';

import home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import Front from "./components/Front"
import SecondDiv from "./components/SecondDiv"




const  App =()=> {

    const options = {
      label: "🌓",
      time: "0.5s",
    };
    const darkmode = new Darkmode(options);
  return(
    <div className="App">
      {darkmode.showWidget()}

    <Router>
      <Switch>
          {/* <Route  exact path ="/" component={form} /> */}
          <Route  exact path="/" component={Front} />

          <Route path="/home" component={home} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />

       </Switch>

    </Router>

    </div>
  )
}
export default App;