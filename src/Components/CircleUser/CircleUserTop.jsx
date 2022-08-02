import React from "react";
import Styles from "../../Styles/Avatars.module.css";
import Change from "../Bottons/Change";
import ViewAll from "../Bottons/ViewAll";

export default function CircleUserTop(props) {
  return (
    <React.Fragment>
      
      <div className={Styles.circleSideRight}>
        <div className={Styles.circleLarge}>
          <img src={props.imagen} alt="jeje"></img>
        </div>

        <content>
          <p className={Styles.firstName}>Nombre de usuario</p>
          <p className={Styles.secondName}>Nombre de usuario2</p>
        </content>
        
        <Change></Change>
      </div>
      <ViewAll></ViewAll>
    </React.Fragment>
  );
}
