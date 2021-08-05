import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MainApp from './MainApp'
import Login1 from './Login1'
import Employeedata from './Employeedata';
import Guestdata from './Guestdata';

function App() {
  
  return( 
  <BrowserRouter>
    <Switch>
      <Route exact path = '/' component={MainApp} />
      <Route exact path = '/login' component={Login1} />
      <Route exact path = '/employeedata' component={Employeedata} />
      <Route exact path = '/guestdata' component={Guestdata} />
      
    </Switch>
  </BrowserRouter>
  )
}

export default App;
