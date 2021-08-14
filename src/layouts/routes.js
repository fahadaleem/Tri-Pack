import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Home from './Home'
// import Guest from "./Guest";
// import Employee from "./Employee";
// import Card from "./Card";
// import ScrollDown from "./scroll";
import Login1 from "../Login1";
import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import Employeedata from "../Employeedata";
import Guestdata from "../Guestdata"

const Layouts = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path = '/guestdata' component={Guestdata} />
                    <Route exact path = '/employeedata' component={Employeedata} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Layouts;
