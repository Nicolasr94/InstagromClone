import React from "react";
import IconHome from "../../images/Icons/icon-HOME.svg";
import Styles from "../../Styles/Icons.module.css"

export default function Home() {
  return (
    <React.Fragment>
      <img className={Styles.imgIcon} src={IconHome} alt="IconHome"></img>
    </React.Fragment>
  );
}
