import React from 'react';
import Heart from  '../Icons/Heart';
import Messages from  '../Icons/Messages';
import Send from  '../Icons/Send';
import Save from  '../Icons/Save';
import Styles from '../../Styles/Icons.module.css'

export default function BarButtons() {
  return (
  <React.Fragment>
    <div className={Styles.containBar}>
      <div className={Styles.firstBar}>
        <Heart></Heart>
        <Messages></Messages>
        <Send></Send>
      </div>
        <Save></Save>
    </div>
    </React.Fragment>
  )
}
