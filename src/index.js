import React from 'react';
import reportWebVitals from './reportWebVitals';
import Styles from './Styles/Main.module.css';
import Main from './Components/Main';
import Header from './Components/Header'
import HistoryBar from './Components/HistoryBar';
import RightMain from './Components/RightMain';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
   <>
    <Header></Header>
    <div className={Styles.largeContain}>
    <HistoryBar></HistoryBar>
    <RightMain></RightMain>
    <Main>
    </Main>    
    </div>
    </>
  </StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();