import React from "react";
import {BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";

import Navbar from './Navbar';

import Home from './Home';
import HomeSkill from './HomeSkill';
import Services from './Services';
import Login from './Login';
import Signup from './Signup';

export default function App() {
  return (
    <Router>
      <div>
        
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/homeskill">
            <HomeSkill />
          </Route>
          <Route path="/service">
            <Services />
          </Route>
           <Route path="/login">
            <Login />
          </Route>
           <Route path="/signup">
            <Signup />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
   
  );
}
