import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Styles from './Styles/Main.module.css';
import Header from './Components/Header'
import Main from './Components/Main';
import HistoryBar from './Components/HistoryBar';
import RightMain from './Components/RightMain';

ReactDOM.render(

  <React.StrictMode>
    <Header></Header>
    <div className={Styles.largeContain}>
    <HistoryBar></HistoryBar>
    <RightMain></RightMain>
    <Main></Main>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
