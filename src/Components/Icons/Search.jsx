import React from "react";
import IconSearch from "../../images/Icons/icon-SEARCH.svg";
import Styles from "../../Styles/Icons.module.css"

export default function Search() {
  return (
    <React.Fragment>
      <img className={Styles.imgIcon} src={IconSearch} alt="IconSearch"></img>
    </React.Fragment>
  );
}
