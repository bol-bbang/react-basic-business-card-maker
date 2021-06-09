import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css'

const Maker = ({ authService }) => {

  const history = useHistory();

  const onLogout = (e) => {
    authService.logout()
  }

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(!user){
        history.push('/');
      }
    });
  });
  
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor/>
        <Preview/>
      </div>
      {/* <h3>Protected ~ user!!! log-in!!!!!! </h3> */}
      <Footer />
    </section>
    );
}

export default Maker;