import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css'

const Maker = ({ authService }) => {

  const history = useHistory();

  const onLogout = (e) => {
    authService.logout()
  }

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(!user){
        history.push({
          pathname: '/'
        })
      }
    });
  });
  
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <h3>Protected ~ user!!! log-in!!!!!! </h3>
      <Footer />
    </section>
    );
}

export default Maker;