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
    
    <Router>
      <Switch>
        <Route path="/login">
          <div className={styles.shadow}>
            <Login />
          </div>
        </Route>
        <PrivateRoute path="/protected">
          <ProtectedPage />
        </PrivateRoute>
      </Switch>
    </Router>

);
}
function ProtectedPage() {
  return <h3>Protected ~ user!!! log-in!!!!!!</h3>;
}

function PrivateRoute({ children, ...rest }) {
  // let auth = useAuth();
  let auth = { user : 'bol-bbang' };
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
