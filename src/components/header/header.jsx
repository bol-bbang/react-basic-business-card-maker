import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
      <header className={styles.header}>
        <img className={styles.logo} src="../images/logo.png" alt=""/>
        <h1>Business Card Maker</h1>
      </header>
  );

export default Header;