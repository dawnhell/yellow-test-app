import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from './containers/PrivateRoute';
import Login from './containers/Login';
import Home from './containers/Home';

const router = (
  <Router>
    <div>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" exact component={Home} />
    </div>
  </Router>
);

export default router;
