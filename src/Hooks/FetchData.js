import { AdapterData } from "./AdapterData";
const baseURL_DEFAULT_PHOTOS = "https://api.pexels.com/v1/curated";

const base_URL_DEFAULT_COLECCTIONS = "https://api.pexels.com/v1/collections/featured"
 // " changed `featured` by `ID` colecction get images and videos https://api.pexels.com/v1/curated
const options = {headers: { 'Authorization': '563492ad6f917000010000012ff7a86d250745cd8ccb3602edf309a4'}};

export  const  fetchData = {
feedPhotos: async (url = baseURL_DEFAULT_PHOTOS) => {
    const response = await fetch(url,options)
    .then((response => response.json()))
    .then((users => console.log(users)))
    .then((users => AdapterData(users)))
    return  response;
  },

historyPhotos:  async (word) => {
let key;
if(word !== undefined){
fetch(base_URL_DEFAULT_COLECCTIONS,options)
.then((response => response.json()))
.then(response => response.collections.map((item) => item.title === word?key=item.title:key='No se ha encontrado resultados'));
return console.log(key);
}
}
} 

