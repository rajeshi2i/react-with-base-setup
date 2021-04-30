import React from 'react';
import {
  Link
} from 'react-router-dom';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <div>
      <span style={{ margin: '0 15px' }} className={styles.link}>
        <Link to="/">TODO List</Link>
      </span>
      <span style={{ margin: '0 15px' }} className={styles.link}>
        <Link to="/home">Home</Link>
      </span>
    </div>
  );
}