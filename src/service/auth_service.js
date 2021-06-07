import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseApp from './firebase';

class AuthService {
  
  login(providerName){
    const provider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth()
          .signInWithPopup(provider);
  }

  logout(){
    return firebaseApp.auth().signOut();
  }

  onAuthStateChanged(onUserChanged){
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged();
    });

  }
}

export default AuthService;