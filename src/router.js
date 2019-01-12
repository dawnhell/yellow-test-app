import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from './containers/PrivateRoute';
import Login from './containers/Login';
import Home from './containers/Home';
import Jogs from './containers/Jogs';
import Info from './components/Info';
import Contact from './components/Contact';

const router = (
  <Router>
    <Home>
      <Route path="/login" component={Login} />

      <PrivateRoute path="/info" component={Info} />
      <PrivateRoute path="/contact" component={Contact} />
      <PrivateRoute path="/" exact component={Jogs} />
    </Home>
  </Router>
);

export default router;
