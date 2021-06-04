import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService, authContext }) => {
  // console.log(authContext);
  const auth = useContext(authContext);
  const history = useHistory();

  const onLogin = (e) => {
    authService.login(e.target.innerText)
    .then(result => {
      console.log(result);
      console.log(result.operationType);
      if(result.operationType !== 'signIn') return;

      const profile = result.additionalUserInfo.profile;
      const userName = profile.name;
      auth.signin(userName);
      return history.push('/');
    })
    .catch(error => {
      console.log(error);
    });
    
  }

  return (
    <div className={styles.shadow}>
      <section className={styles.container}>
        <Header />
        <section className={styles.login}>
          <h1 className={styles.label}>Login</h1>
          <ul className={styles.buttons}>
            <li><button className={styles.button} onClick={onLogin}>Google</button></li>
            <li><button className={styles.button} onClick={onLogin}>Github</button></li>
          </ul>
        </section>
        <Footer />
      </section>
    </div>
    );
}

export default Login;