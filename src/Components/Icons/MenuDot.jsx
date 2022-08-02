import React from "react";
import IconMenuDot from "../../images/Icons/icon-MENU-DOT.svg";
import Styles from "../../Styles/Icons.module.css"

export default function MenuDot() {
  return (
    <React.Fragment>
      <img className={Styles.imgIcon} src={IconMenuDot} alt="IconMenuDot"></img>
    </React.Fragment>
  );
}
