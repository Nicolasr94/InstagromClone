import React from "react";
import IconFavorite from "../../images/Icons/icon-FAVORITE.svg";
import Styles from "../../Styles/Icons.module.css"

export default function Favorite() {
  return (
    <React.Fragment>
      <img className={Styles.imgIcon} src={IconFavorite} alt="IconFavorite"></img>
    </React.Fragment>
  );
}
