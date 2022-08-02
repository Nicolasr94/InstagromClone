import React from "react";
import IconCompass from "../../images/Icons/icon-COMPASS.svg";
import Styles from "../../Styles/Icons.module.css"

export default function Save() {
  return (
    <React.Fragment>
      <img className={Styles.imgIcon} src={IconCompass} alt="IconCompass"></img>
    </React.Fragment>
  );
}
