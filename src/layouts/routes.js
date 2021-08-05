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

const Layouts = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Layouts;
