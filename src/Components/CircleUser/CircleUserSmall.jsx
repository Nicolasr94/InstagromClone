import React from "react";
import Styles from "../../Styles/Avatars.module.css";
import Follow from "../Bottons/Follow"; 

export default function CircleUserSmall(props) {
  return (
    <React.Fragment>
     <div className={Styles.circleSideRight}>
        <div className={Styles.circleSmall}>
          <img src={props.imagen} alt="jeje"></img>
        </div>

        <content>
          <h3 className={Styles.firstNameSmall}>Nombre de usuario</h3>
          <h4 className={Styles.secondNameSmall}>Sugerencia para ti </h4>
        </content>
        <Follow></Follow>
      
      </div>
     
    </React.Fragment>
  );  
}
