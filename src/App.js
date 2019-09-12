import React, { useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { BookProvider } from './contexts/BookContext';
import { useUser } from './contexts/UserContext';
import firebase from './shared/firebase';
import AppBar from './components/AppBar/AppBar';
import Login from './components/Login/Login';
import Landing from './components/Landing/Landing';
import Blog from './components/Blog/Blog';

const App = ({ history }) => {
  const { firebaseUser, setUser } = useUser();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        history.push('/landing');
      } else {
        setUser(null);
        history.push('/login');
      }
    });
  }, [history, setUser]);

  let routes = (
    <Switch>
      <Route path='/landing' component={Landing} />
      <Route path='/login' component={Login} />
    </Switch>
  );

  if (firebaseUser !== null) {
    routes = (
      <Switch>
        <BookProvider>
          <Route path='/blog' component={Blog} />
          <Route path='/landing' component={Landing} />
          <Route path='/login' component={Login} />
          <Redirect to='/landing' />
        </BookProvider>
      </Switch>
    );
  }

  return firebaseUser === null ? (
    <div>{routes}</div>
  ) : (
      <div>
        <AppBar />
        {routes}
      </div>
    );
}

export default withRouter(App);
