import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

class LoginAuth {

  constructor() {
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDi9ia4nmiLgK50ZBu8AzSkgLtQjWej720",
      authDomain: "business-card-maker-3557d.firebaseapp.com",
      projectId: "business-card-maker-3557d",
      storageBucket: "business-card-maker-3557d.appspot.com",
      messagingSenderId: "677563751230",
      appId: "1:677563751230:web:2796b8f3f080a613806a6f",
      measurementId: "G-72FVQ1HF0T"
    };
    // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    } else {
      firebase.app();
    }
  }
  
  async google (){
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
      .signInWithPopup(provider);
  }
  
  async github (){
    const provider = new firebase.auth.GithubAuthProvider();
    return firebase.auth()
      .signInWithPopup(provider);
  }

}

export default LoginAuth;