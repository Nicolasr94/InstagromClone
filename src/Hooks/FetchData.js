import { AdapterData } from "./AdapterData";
// 563492ad6f91700001000001f55fd2dcbcc843f5b9c1641002d2849b nicolasb.rivero
// 563492ad6f917000010000012ff7a86d250745cd8ccb3602edf309a4 nicolas.rivero 

const baseURL_DEFAULT_PHOTOS = "https://api.pexels.com/v1/curated";
//https://api.pexels.com/v1/search/?locale=es-ES&query=perro
const base_URL_DEFAULT_COLECCTIONS =
"https://api.pexels.com/v1/collections/featured";
// " changed `featured` by `ID` colecction get images and videos https://api.pexels.com/v1/curated
const options = {
  headers: {
    Authorization: "563492ad6f91700001000001f55fd2dcbcc843f5b9c1641002d2849b",
  }
}
 
const base_URL = "https://api.pexels.com/v1/collections/featured/?page=1&per_page=80";


const filterData =  (data,word) => {
  let filter =  data.filter((item) => item.title === word)
  if (filter.id){
   return  console.log('encontrado '+filter.id)
}else{
   return false
}};


const fetchData = async (url) => {
  let res = await fetch(url, options),
  json = await res.json();
  return json;
};


export const historyPhotos = async (word,url) => {
  let {collections,next_page} = await fetchData(url = base_URL);
  console.log(collections)
  let filter = filterData(collections,word)
}

export const feedPhotos = async () => {
  const response = await fetch(baseURL_DEFAULT_PHOTOS, options)
  .then((response) => response.json())
  // .then((users => console.log(users)))
  .then((users) => AdapterData(users));
  return response;  
}

  

// let keyId;
// let response = {'next_page':'',
//                 'collections':Array
//                 ,'id':'',
//                 'find':Boolean}
// await fetch(base_URL_DEFAULT_COLECCTIONS,options)
// .then((resp => resp.json()))
// .then((res) => {
//   response = {next_page:res.next_page,collections:res.collections}
// })

// response.collections.filter((item) => item.title === word?response.id = item.id && find=true:response.find = false)
// if(response.find === false) {

// }
// return response

// .then(response => console.log(response))
// item.title === 'Deserts'?key = true:false .then(response => response.collections.map((item) => item.title === word?key=item.title:key='No se ha encontrado resultados'))
