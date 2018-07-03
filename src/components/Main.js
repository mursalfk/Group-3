import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './dashboard';
import Login from './login';
import Signup from './signup';



const Main = () => (
  <Switch>
  < Route  path= '/dashboard' component= {Dashboard}/>
  < Route  path= '/login' component= {Login}/>
  < Route  path= '/signup' component= {Signup}/>
  </Switch>
)
export default Main;
