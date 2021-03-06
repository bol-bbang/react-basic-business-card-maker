import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css'

const Maker = ({ FileInput, authService, databaseService }) => {

  const history = useHistory();
  const historyState = history?.location?.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });

  }, [authService, history]);

  useEffect(() => {

    databaseService.getCards(userId)
      .then((snapshot) => {
        const value = snapshot.val();
        value && setCards(value);
      });

  }, [userId, databaseService]);

  const createOrUpdateCard = useCallback((card) => {
    setCards(cards => {
      let updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });

    databaseService.update(card, userId);
  }, [databaseService, userId]);

  const deleteCard = useCallback((card) => {
    setCards(cards => {
      let updated = { ...cards };
      delete updated[card.id];
      return updated;
    });

    databaseService.delete(card, userId);
  }, [databaseService, userId]);

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor FileInput={FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
}

export default Maker;