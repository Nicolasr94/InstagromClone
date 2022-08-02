import React from "react";
import Styles from "../../Styles/Avatars.module.css";

export default function CircleUserPageHistory(props) {
  return (
    <React.Fragment>
     <div className={Styles.circleSideRight}>
        <div className={Styles.circleSmall}>
          <img src={props.imagen} alt="jeje"></img>
        </div>

        <content>
          <h3 className={Styles.firstNameSmall}>Nombre de usuario</h3>
        </content>      
      </div>
     
    </React.Fragment>
  );  
}
