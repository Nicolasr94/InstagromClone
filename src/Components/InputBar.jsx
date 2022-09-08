import React from 'react';
import {translate} from '../Hooks/FetchTranslate'; // devuelve la variable `word`
import { fetchData } from '../Hooks/FetchData';
import { useState } from 'react';

export default function InputBar () {
  const [inputValue, setInputValue] = useState('');
  // const [suggested, setSuggested] = useState(['Oceano','Animal','Gato','Agua','Abstracto','Ganpati','Naturalez','Flores','comida','Espacio','perro','Cafe','Playa']);
  // const [wordsKey, setWordsKeys] = useState({
  //   aprobed:[],
  //   notMatch:[]
  // });
  
  const  getColecctions = async () => {
    let resultTranslate;
    let resultFetch;
    if(inputValue !== ''){
      resultTranslate = await translate(inputValue);
    }
    if(resultTranslate){
      fetchData.historyPhotos(inputValue)
      .then(response => response.ok?resultFetch = true:resultFetch = false)
    }
    
    return console.log(resultFetch)
  }
  // wordsKey.notMatch += event.target.value
  
  const sendInputValue = event => {
    setInputValue(event.target.value)
    }
  
    return (
      <input placeholder='Buscar' onKeyDown={sendInputValue}></input>
    )
  
}   