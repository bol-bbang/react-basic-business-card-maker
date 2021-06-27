import firebase from 'firebase/app';

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    };
    // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);
    // if (!firebase.apps.length) {
      const firebaseApp = firebase.initializeApp(firebaseConfig);
    // } else {
    //   firebase.app();
    // }

    export default firebaseApp;