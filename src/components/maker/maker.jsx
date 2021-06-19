import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css'

const Maker = ({ authService }) => {

  const history = useHistory();
  const [cards, setCards] = useState([
    {
      id: 1, 
      name: 'bol-bbang', 
      company: 'HHsoft',
      title: 'manager',
      phone: '010-5549-0226', 
      email: 'parkhh9000@gmail.com',
      theme: 'dark',
      message: 'no pain, no gain',
      fileName: 'file_name',
      fileURL: null
    },
    {
      id: 2, 
      name: 'hoon', 
      company: 'HHsoft',
      title: 'CEO',
      phone: '010-2464-6701', 
      email: 'imode7@gmail.com',
      theme: 'light',
      message: 'no pain, no gain',
      fileName: 'file_name',
      fileURL: 'bol-bbang.png'
    },
    {
      id: 3, 
      name: 'hee', 
      company: 'HHsoft',
      title: 'web software engineer',
      phone: '010-xxxx-xxxx', 
      email: 'prettysea90@naver.com',
      theme: 'colorful',
      message: 'no pain, no gain',
      fileName: 'file_name',
      fileURL: 'bol-bbang.png'
    }
  ]);
  
  const onLogout = (e) => {
    authService.logout();
  }
  
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(!user){
        history.push('/');
      }
    });
  });
  
    const addCard = (card) => {
      let updated = [...cards, card];
      setCards(updated);
    }
  
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
    );
}

export default Maker;