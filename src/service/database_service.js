import { firebaseDatabase } from './firebase';

class DatabaseService {

  async getCards(userId) {
    return firebaseDatabase.ref(`${userId}/cards`).get();
  }

  update(card, userId) {
    firebaseDatabase
      .ref(`${userId}/cards/${card.id}`)
      .set(card);
  }

  delete(card, userId) {
    firebaseDatabase
      .ref(`${userId}/cards/${card.id}`)
      .remove();
  }
}

export default DatabaseService;