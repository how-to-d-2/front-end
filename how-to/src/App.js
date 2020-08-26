import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HowTos from "./components/HowTos";
import PrivateRoute from "./components/PrivateRoute";
import HowToForm from "./components/HowToForm";
import {
  NavBar,
  HeaderTitleTop,
  HeaderTitleWrapper,
} from "./components/NavBarStyle";

function App() {
  return (
    <div className="App">
      <NavBar>
        <HeaderTitleWrapper>
          <HeaderTitleTop>HOW TO GUIDE </HeaderTitleTop>
        </HeaderTitleWrapper>
      </NavBar>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/How-To">
              <HowTos />
            </Route>
            <PrivateRoute path="/How-To" components={HowTos} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
