import React,{useEffect, useState} from 'react';
import Styles from '../Styles/Main.module.css';
import BarButtons from './Bottons/BarButtons';
import BoxComment from './BoxComment';
import Counter from './Counter';
import imagen from  '../images/Icons/osoPanda.png'
import CircleUserPageHistory from './CircleUser/CircleUserPageHistory';



export default function ElementsHistory(props) {

 
  return (
    
    <React.Fragment>
      <contain className={Styles.historyContain}>
      <div className={Styles.historyHeader}>
        <CircleUserPageHistory></CircleUserPageHistory>
      </div>
      <div className={Styles.containImgPage}><img src={imagen} alt='aa'></img></div>
      <div className={Styles.historyIconBar}>
        <BarButtons></BarButtons>
      </div>
      <div><Counter likes='500'></Counter></div>
      <div className={Styles.userComent}><h4>usuario</h4> <p>Quien para ... </p></div>
      <div><button>Ver 25 comentarios</button></div>
      <div>Hace 17 horas</div>
      <BoxComment></BoxComment>
      </contain>
    </React.Fragment>
  )
}
