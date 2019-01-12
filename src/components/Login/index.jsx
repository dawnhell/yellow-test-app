import React from 'react';
import { Redirect } from 'react-router-dom';

import { isAuthenticated } from '../../utils/authUtil';

import login_icon from '../../images/login_icon.png';
import './styles.css';

const Login = ({ authToken, login, location }) => isAuthenticated() ?
  <Redirect to={(location.state && location.state.from) || '/' } /> :
  (
    <div className="login-wrapper">
      <img src={login_icon} alt="login-icon"/>
      <button onClick={login}>Let me in</button>
    </div>
  );

export default Login;
