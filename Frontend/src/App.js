import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

          /*  Screens */
import Register from './screens/Register';
import Home from './screens/Home'
import Login from './screens/Login'
import loginHome from './screens/Login_Home'
import userslist from './screens/Users'
import Error from './screens/Error'


const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={loginHome} />
          <Route path="/userslist" component={userslist} />
          <Route path="/errorpage" component={Error} />
        </Switch>
      </BrowserRouter>
  )
}

export default App;
