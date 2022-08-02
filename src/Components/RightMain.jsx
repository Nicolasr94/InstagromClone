import React from "react";
import Styles from '../Styles/Main.module.css';
import ProfileSuggested from "./ProfileSuggested";
import CircleUserTop from "./CircleUser/CircleUserTop";

export default function RightMain(prop) {
 
    return (
      <React.Fragment>
        <div className={Styles.containerAvatar}>
          <div>
            <CircleUserTop></CircleUserTop>
          </div>
          
          <ProfileSuggested></ProfileSuggested>
        </div>
      </React.Fragment>
    )
  }