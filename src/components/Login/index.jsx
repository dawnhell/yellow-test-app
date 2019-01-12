import React from 'react';
import { Redirect } from 'react-router-dom';

import { isAuthenticated } from '../../utils/authUtil';

const Login = ({ token, login, location }) => (isAuthenticated() ?
    <Redirect to={location.state.from || '/' } /> :
    (
      <div>
        <p>LOGIN</p>
        <button onClick={login}>Log in</button>
      </div>
    )
);

export default Login;
