import React from "react";
import CircleUserSmall from "../Components/CircleUser/CircleUserSmall";
import Styles from '../Styles/Main.module.css';

export default function ProfileSuggested() {
    return (
        <React.Fragment>
        <div className={Styles.suggestedContain}>
        
        <CircleUserSmall></CircleUserSmall>
        <CircleUserSmall></CircleUserSmall>
        <CircleUserSmall></CircleUserSmall>
        <CircleUserSmall></CircleUserSmall>
        <CircleUserSmall></CircleUserSmall>
    </div>
        </React.Fragment>
    )
}