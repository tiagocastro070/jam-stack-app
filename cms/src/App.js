import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import Admin from './Pages/Admin'
import Login from './Components/Login'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

function App () {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' exact render={() => <Redirect to='/login' />} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Admin} />
        </Switch>
    </BrowserRouter>
  );
}

export default App
