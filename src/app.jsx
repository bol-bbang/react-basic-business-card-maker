import React, { useContext, createContext, useState } from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App({ authService }) {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path={['/login']} exact>
            <Login authService={authService} authContext={authContext}/>
          </Route>
          <PrivateRoute path="/">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    cb();
    // setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    cb();
    fakeAuth.isAuthenticated = false;
    // setTimeout(cb, 100);
  }
};

/** 
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 */
const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = userName => {
    return fakeAuth.signin(() => {
      setUser(userName);
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}



function ProtectedPage() {
  let auth = useAuth();
  return <h3>Protected ~ user!!! log-in!!!!!! {auth.user}</h3>;
}

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  console.log(auth.user);
  console.log(auth);
  return (
    <Route
      {...rest}
      render = {({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
