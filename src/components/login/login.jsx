import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const history = useHistory();

  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: {id: userId}
    });
  }
  const onLogin = (e) => {
    authService
      .login(e.target.textContent)
      .then(data => goToMaker(data.user.uid))
      .catch(error => {
        console.log('로그인 실패');
      });
    
  }
  useEffect(()=>{
    authService
      .onAuthStateChanged(user => {
        user && goToMaker(user.uid);
      });
  });

  return (
      <section className={styles.login}>
        <Header />
        <section>
          <h1 className={styles.label}>Login</h1>
          <ul className={styles.buttons}>
            <li><button className={styles.button} onClick={onLogin}>Google</button></li>
            <li><button className={styles.button} onClick={onLogin}>Github</button></li>
          </ul>
        </section>
        <Footer />
      </section>
    );
}

export default Login;