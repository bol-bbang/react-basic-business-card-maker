import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => {
  return (
      <header className={styles.header}>
        <img className={styles.logo} src="../images/logo.png" alt=""/>
        <h1>Business Card Maker</h1>
        { onLogout && <button className={styles.logout} onClick={onLogout}>Logout</button> }
      </header>
  )
};

export default Header;