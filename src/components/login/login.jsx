import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
import loginAuth from '../../service/loginAuth.js';

const Login = (props) => {

  const onClick = (e) => {

    handleAuth(e.target)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
    
  }
  const handleAuth = (target) => {
    const auth = new loginAuth();
    switch(target.innerText){
      case 'Google': return auth.google();
      case 'Github': return auth.github();
    }
    
  }

  return (
    <div className={styles.shadow}>
      <div className={styles.container}>
        <Header />
        <div className={styles.buttons}>
          <h2 className={styles.label}>Login</h2>
          <button className={styles.button} onClick={onClick}>Google</button>
          <button className={styles.button} onClick={onClick}>Github</button>
        </div>
        <Footer />
      </div>
    </div>
    );
}

export default Login;