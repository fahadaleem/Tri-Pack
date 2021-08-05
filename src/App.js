import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MainApp from './MainApp'
import Login1 from './Login1'
import Employeedata from './Employeedata';
import Guestdata from './Guestdata';
import Layouts from './layouts/routes'

function App() {
  
  return( 
    <>
    <Layouts />
    </>
  )
}

export default App;
