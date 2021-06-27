// import firebase from 'firebase/app';
import 'firebase/database';
import firebaseApp from './firebase';

class DatabaseService {

  setUserId(userId){
    this.userId = userId;
  }

  async getCards(){
    return firebaseApp.database().ref(`${this.userId}/cards`).get();
  }

  update(card){
    firebaseApp.database()
    .ref(`${this.userId}/cards/${card.id}`)
    .set(card);
  }

  delete(card){
    firebaseApp.database()
    .ref(`${this.userId}/cards/${card.id}`)
    .remove();
  }
}

export default DatabaseService;