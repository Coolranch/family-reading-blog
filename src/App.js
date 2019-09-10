import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import Login from './components/Login/Login';

const App = ({ history }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        history.push('/landing');
      } else {
        history.push('/login');
      }
    });
  }, [history]);

  let routes = (
    <Switch>
      <Route path='/login' component={Login} />
    </Switch>
  );

  return (
    <div>
      {routes}
    </div>
  );
}

export default withRouter(App);
