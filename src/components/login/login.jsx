import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {

  const onLogin = (e) => {
    authService.login(e.target.innerText)
    .then(result => {
      console.log(result);
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