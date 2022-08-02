import React from 'react';
import Styles from '../Styles/Main.module.css';
import CircleUserLarge from './CircleUser/CircleUserLarge';

export default function HistoryBar(props) {
  return (
    <React.Fragment>
    <nav className={Styles.historyNav}>

      <CircleUserLarge></CircleUserLarge>
      <CircleUserLarge></CircleUserLarge>
      <CircleUserLarge></CircleUserLarge>
      <CircleUserLarge></CircleUserLarge>

      <CircleUserLarge></CircleUserLarge>
      <CircleUserLarge></CircleUserLarge>
      <CircleUserLarge></CircleUserLarge>

      
      <CircleUserLarge></CircleUserLarge>
      <CircleUserLarge></CircleUserLarge>
      <CircleUserLarge></CircleUserLarge>
      <CircleUserLarge></CircleUserLarge>
    </nav>
    </React.Fragment>
  )
}
