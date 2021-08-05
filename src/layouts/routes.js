import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Home from './Home'
// import Guest from "./Guest";
// import Employee from "./Employee";
// import Card from "./Card";
// import ScrollDown from "./scroll";
import Home from "../screens/Home";

const Layouts = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Layouts;
