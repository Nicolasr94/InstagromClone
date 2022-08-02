import React from "react";
import IconAdd from "../../images/Icons/icon-ADDHISTORY.svg";
import Styles from "../../Styles/Icons.module.css"

export default function AddHistory() {
  return (
    <React.Fragment>
      <img className={Styles.imgIcon} src={IconAdd} alt="IconAddHistory"></img>
    </React.Fragment>
  );
}
