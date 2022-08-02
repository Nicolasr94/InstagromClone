import React from "react";
import IconHeart from "../../images/Icons/icon-HEART.svg";
import Styles from "../../Styles/Icons.module.css"

export default function Heart() {
  return (
    <React.Fragment>
      <img className={Styles.imgIcon} src={IconHeart} alt="IconHeart"></img>
    </React.Fragment>
  );
}
