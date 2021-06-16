import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

          /*  Screens */
import Register from './screens/Register';
import Home from './screens/Home';
import Login from './screens/Login';
import userslist from './screens/Users';
import userConfig from './screens/ConfigUser';  

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/userslist" component={userslist} />
          <Route path="/userconfig" component={userConfig} />
        </Switch>
      </BrowserRouter>
  )
}

export default App;
