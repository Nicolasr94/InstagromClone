import React, { useEffect } from 'react';
import {translate} from '../Hooks/TranslateWord'; // Hace un fetch y devuelve la variable `word`
import { historyPhotos } from '../Hooks/FetchData';
import { useState } from 'react';
const base_URL = "https://api.pexels.com/v1/collections/featured/?page=1&per_page=80";
export default function InputBar () {
  const [inputValue, setInputValue] = useState('');
  // const [suggested, setSuggested] = useState(['Oceano','Animal','Gato','Agua','Abstracto','Ganpati','Naturalez','Flores','comida','Espacio','perro','Cafe','Playa']);
  // const [wordsKey, setWordsKeys] = useState({
  //   aprobed:[],
  //   notMatch:[]
  // });
  
 
  // wordsKey.notMatch += event.target.value
  
const data = async () => {
  let fetch2 = await historyPhotos(inputValue,base_URL)
    return console.log("este es el fetch 2 "+ fetch2 ); 
}


  const sendInputValue = (e) => {
   if(e.key === 'Enter' && e.inputValue !== ''){
      setInputValue(e.target.value)
      data()
    }

  }
    return ( 
      <input placeholder='Buscar' onKeyUp={sendInputValue}></input>
    )

    }
  