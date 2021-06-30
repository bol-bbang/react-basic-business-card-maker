import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo((props) => (
  <footer className={styles.footer}>
    <h3 className={styles.title}>Make your dream</h3>
  </footer>
));

export default Footer;