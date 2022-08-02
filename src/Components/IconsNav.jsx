import React from 'react'
import styles from './../Styles/Header.module.css';
import Home from '../Components/Icons/Home';
import Messages from '../Components/Icons/Messages'
import AddHistory from '../Components/Icons/AddHistory'
import Compass from '../Components/Icons/Compass'
import Heart from '../Components/Icons/Heart'
import CircleUserSmall from '../Components/CircleUser/CircleUserSmall'

export default function IconsNav() {


  return (
    <ol className={styles.container}>
   <li><Home></Home></li>
   <li><Messages></Messages></li>
   <li><AddHistory></AddHistory></li>
   <li><Compass></Compass></li>
   <li><Heart></Heart></li>
   <li><CircleUserSmall></CircleUserSmall></li>

    </ol>
  )
}
