import React from "react";
import Styles from "../../Styles/Avatars.module.css";

export default function CircleUserLarge(props) {
  return (
    <React.Fragment>
      <div className={Styles.circleLargeContain}>
        <div className={Styles.circleLarge}>
          <img
            className={Styles.circleLargeimg}
            src={props.imagen}
            alt=""
          ></img>
        </div>
        <h6>Nombre de usuario</h6>
      </div>
    </React.Fragment>
  );
}
