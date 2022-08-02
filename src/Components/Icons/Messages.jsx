import React from "react";
import IconMessages from "../../images/Icons/icon-MESSAGES.svg";
import Styles from "../../Styles/Icons.module.css"

export default function Messages() {
  return (
    <React.Fragment>
      <img className={Styles.imgIcon} src={IconMessages} alt="IconMessages"></img>
    </React.Fragment>
  );
}
