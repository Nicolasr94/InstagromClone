import React from 'react';
import Styles from '../Styles/Main.module.css';
import HistoryPage from './HistoryPage';
export default function Main() {
  return (
    <div className={Styles.largeMain}>
      <HistoryPage></HistoryPage>
    </div>
  )
}
