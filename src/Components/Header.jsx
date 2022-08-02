import React from 'react';
import IconsHeader from './IconsNav';
import InputBar from './InputBar';
import styles from './../Styles/Header.module.css';

export default function Header() {
  return (
  <div className={styles.containerHeader}>
  <header className={styles.flexHead}>
    <div className={styles.logoInstagram}>
      Instagram
      <br></br>
      powered by API.
    </div>
    <InputBar></InputBar>
    <IconsHeader></IconsHeader>
  </header>
  </div>
  )
}
