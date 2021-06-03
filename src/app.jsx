import React, { useContext, createContext, useState } from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path={['/', '/login']} exact>
            <Login onSignin={useProvideAuth().signin}/>
          </Route>
          <PrivateRoute path="/protected">
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
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
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

  const signin = cb => {

    //인증 프로세스
    const userName = 'bol-bbang';
    return fakeAuth.signin(() => {
      setUser(userName);
      cb();
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
  return <h3>Protected ~ user!!! log-in!!!!!!</h3>;
}

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
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
