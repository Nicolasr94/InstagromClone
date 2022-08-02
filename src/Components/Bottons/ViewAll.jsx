import React from 'react';
import Styles from '../../Styles/Main.module.css'; 

export default function ViewAll (){
    return (
        <React.Fragment>
           <div className={Styles.containerTitleH}>
           <h4 className={Styles.titleH}>Sugerencias para ti</h4> <a href='gf'>Ver todo</a>
          </div>
        </React.Fragment>
      )
}