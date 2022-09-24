// import React from "react";
// import { useEffect, useState } from "react";

// const base_URL = "https://api.pexels.com/v1/collections/featured/?page=1&per_page=15";
// const URL_COLLECTIONS = (id) => `https://api.pexels.com/v1/collections/${id}`;
// const options = {
//   headers: {
//     Authorization: "563492ad6f917000010000012ff7a86d250745cd8ccb3602edf309a4",
//   },
// };
// //'https://api.pexels.com/v1/collections/featured/?page=1&per_page=15'  --- "https://api.pexels.com/v1/collections/featured"
// //
// function upperToCase(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// /* Biker */
// export default function UseFetchUsers({ word }) {
//   function filterData ({ data },word) {
//     return  data.collection.filter((item) => item.title === word)
//   }
// const fetchAndFilter = async(url = base_URL) => {
//  const res = await fetch(url)
//  const next_page = res.next_page
//  const filter = await filterData(res)

//  if(filter !== '' || !undefined){
//   return filter.id
//  }else{
//   if(next_page)
//   fetchAndFilter(next_page)
//  }
// }

//   useEffect(() => {
//     let colecctionId;
//     let upperWord = upperToCase(word);
//     fetch(base_URL, options)
//       .then((resp) => resp.json())
//       .then((res) => console.log(res))
//       // .then((res) => res.collections.filter(item => item === upperWord))
//       .then((data) => console.log(data + word + colecctionId));
//     return;
//   });

//   return <div></div>;
// }
