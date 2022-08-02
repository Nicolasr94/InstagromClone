import React from 'react';
import IconSave from '../../images/Icons/icon-SAVE.svg';
import Styles from "../../Styles/Icons.module.css"

export default function Save() {
  return (
    <React.Fragment>
      <img className={Styles.imgIcon} src={IconSave} alt='IconSave'></img>
    </React.Fragment>
  )
}
