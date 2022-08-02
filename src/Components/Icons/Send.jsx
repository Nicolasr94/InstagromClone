import React from "react";
import IconSend from "../../images/Icons/icon-SEND.svg";
import Styles from "../../Styles/Icons.module.css"

export default function Send() {
  return (
    <React.Fragment>
      <img className={Styles.imgIcon} src={IconSend} alt="IconSend"></img>
    </React.Fragment>
  );
}
