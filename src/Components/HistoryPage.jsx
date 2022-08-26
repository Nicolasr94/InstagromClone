import {useEffect,useState} from 'react';
import { fetchData } from "../Hooks/FetchData";
import { AdapterData } from "../Hooks/AdapterData";
import LayoutHistory from './LayoutHistory';



export default function HistoryPage (){
  const [data, setData] = useState();
 useEffect(() => {
  fetchData() 
  .then((response) =>  AdapterData(response))
  .then((data)=> setData(data)) 
  }, [])

console.log(data)

if(data !== undefined)
data.photos.map(users => {
  return  <LayoutHistory users = { users} ></LayoutHistory> 
})
  }

