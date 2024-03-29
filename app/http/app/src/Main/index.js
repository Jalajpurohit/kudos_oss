import React, { Component } from 'react';
import { Switch, Route, } from 'react-router-dom'
import { Security, ImplicitCallback, SecureRoute } from '@okta/okta-react';

import Login from '../Login'
import Home from '../Home'

class Main extends Component {
  render() {
    return (
      <main>
        <Security 
          issuer={'https://dev-446187.okta.com'}
          client_id={'0oa53ehl6AyYL6w8Z4x6'}
          redirect_uri={'http://localhost:8080/implicit/callback'}
          scope={['openid', 'profile', 'email']}>
          
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/implicit/callback" component={ImplicitCallback} />
            <SecureRoute path="/home" component={Home} />
          </Switch>
        </Security>
      </main>
    );
  }
}

export default Main;