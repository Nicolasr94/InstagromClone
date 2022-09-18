import { AdapterData } from "./AdapterData";
const baseURL_DEFAULT_PHOTOS = "https://api.pexels.com/v1/curated";

const base_URL_DEFAULT_COLECCTIONS = "https://api.pexels.com/v1/collections/featured"
 // " changed `featured` by `ID` colecction get images and videos https://api.pexels.com/v1/curated
const options = {headers: { 'Authorization': '563492ad6f917000010000012ff7a86d250745cd8ccb3602edf309a4'}};


export const feedPhotos =async (url = baseURL_DEFAULT_PHOTOS) => {
    const response = await fetch(url,options)
    .then((response => response.json()))
    // .then((users => console.log(users)))
    .then((users => AdapterData(users)))
    return  response;
  }

export const historyPhotos = async (word) => {
let colecctionId;
let response = await fetch(base_URL_DEFAULT_COLECCTIONS,options)
.then((resp => resp.json()))
.then((res) => res.collections.map(item => console.log(item)))
.then((data)=> console.log(data + word + colecctionId))
return response
}

// .then(response => console.log(response))
// item.title === 'Deserts'?key = true:false .then(response => response.collections.map((item) => item.title === word?key=item.title:key='No se ha encontrado resultados'))
