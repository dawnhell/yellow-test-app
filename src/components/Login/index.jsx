import React from 'react';
import { Redirect } from 'react-router-dom';

const Login = ({ authToken, login, location }) => authToken ?
  <Redirect to={(location.state && location.state.from) || '/' } /> :
  (
    <div>
      <p>LOGIN</p>
      <button onClick={login}>Log in</button>
    </div>
  );

export default Login;
