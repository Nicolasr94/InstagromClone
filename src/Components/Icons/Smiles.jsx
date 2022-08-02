import React from "react";
import IconSmiles from "../../images/Icons/icon-SMILE.svg";
import Styles from "../../Styles/Icons.module.css"

export default function Smiles() {
  return (
    <React.Fragment>
      <img className={Styles.imgIcon} src={IconSmiles} alt="IconSmiles"></img>
    </React.Fragment>
  );
}
