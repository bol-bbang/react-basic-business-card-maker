import { firebaseAuth, googleAuthProvider, githubAuthProvider } from './firebase';

class AuthService {
  
  login(providerName){
    const provider = this.getProvider(providerName);
    return firebaseAuth
          .signInWithPopup(provider);
  }

  logout(){
    firebaseAuth.signOut();
  }

  onAuthStateChanged(onUserChanged){
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  getProvider(providerName){
    switch(providerName){
      case 'Google': return googleAuthProvider;
      case 'Github': return githubAuthProvider;
      default:
        throw new Error(`not supported provider : ${providerName}`);
    }
  }
}

export default AuthService;