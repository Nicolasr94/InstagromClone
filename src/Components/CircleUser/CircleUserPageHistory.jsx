import React from "react";
import Styles from "../../Styles/Avatars.module.css";

export default function CircleUserPageHistory({imagen,user}) {
  return (
    <React.Fragment>
     <div className={Styles.circleSideRight}>
        <div className={Styles.circleSmall}>
          <img src={imagen} alt="jeje"></img>
        </div>

        <div>
          <h3 className={Styles.firstNameSmall}>{user}</h3>
        </div>      
      </div>
     
    </React.Fragment>
  );  
}
