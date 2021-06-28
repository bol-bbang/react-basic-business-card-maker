// import firebase from 'firebase/app';
import 'firebase/database';
import firebaseApp from './firebase';

class DatabaseService {

  // setUserId(userId) {
  //   this.userId = userId;
  //   console.log(`setUserId : ${this.userId}`);
  // }

  async getCards(userId) {
    return firebaseApp.database().ref(`${userId}/cards`).get();
  }

  update(card, userId) {
    firebaseApp.database()
      .ref(`${userId}/cards/${card.id}`)
      .set(card);
  }

  delete(card, userId) {
    firebaseApp.database()
      .ref(`${userId}/cards/${card.id}`)
      .remove();
  }
}

export default DatabaseService;