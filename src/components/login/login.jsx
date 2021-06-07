import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService, authContext }) => {
  const auth = useContext(authContext);
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
      .then(result => {
        // console.log(result);
        if(result.operationType !== 'signIn') return;
        
        const profile = result.additionalUserInfo.profile;
        const userName = profile.name;
        auth.signin(userName);

        goToMaker(result.user.uid);
      })
      .catch(error => {
        console.log(error);
      });
    
  }
  useEffect(()=>{
    authService
      .onAuthStateChanged(user => {
        user && goToMaker(user.uid);
      });
  });

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