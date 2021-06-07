import React, { useContext } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Maker = ({authService, authContext}) => {

  // const auth = useAuth();
  const auth = useContext(authContext);
  const onLogout = (e) => {
    authService.logout()
    .then(() => {
      auth.signout();
    }).catch((error) => {
      console.log(error);
    });
  }
  
  return (
    <>
      <Header onLogout={onLogout} authContext={authContext} />
      <h3>Protected ~ user!!! log-in!!!!!! {auth.user}</h3>
      <Footer />
    </>
    );
}

export default Maker;