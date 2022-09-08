import Styles from '../Styles/Main.module.css';
import BarButtons from './Bottons/BarButtons';
import BoxComment from './BoxComment';
import Counter from './Counter';
import CircleUserPageHistory from './CircleUser/CircleUserPageHistory';
import { random } from "../Assets/randomNumbers";

import React from 'react'

export default function HistoryPageLayout(users,key) {
  if (users !== undefined) {
    users = users.users
    return (
      <div id={key}>
        <div className={Styles.historyContain}>
          <div className={Styles.historyHeader}>
            <CircleUserPageHistory imagen={users.image_avatar} user={users.user_name}></CircleUserPageHistory>
          </div>
          <div className={Styles.containImgPage}><img src={users.image_history} alt={users.user_name}></img></div>
          <div className={Styles.historyIconBar}>
            <BarButtons></BarButtons>
          </div>
          <div><Counter likes={random()}></Counter></div>
          <div className={Styles.userComent}><h4> {users.user_name}</h4> <p>{users.alt}</p></div>
          <div><button>Ver comentarios</button></div>
          <div>Hace 17 horas</div>
          <BoxComment></BoxComment>
        </div>
      </div>
    )
  }
}
