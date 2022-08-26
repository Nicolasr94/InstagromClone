const baseURL = "https://api.pexels.com/v1/search?query=nature&per_page=5";
const options = {headers: { 'Authorization': '563492ad6f917000010000012ff7a86d250745cd8ccb3602edf309a4'}};
 
export  const  fetchData = async () => {
  let users;
  try{
    const response = await fetch(baseURL,options);
    users = await response.json();
  }
  catch(e){
    console.log('error ' + e);
    return e;
  }
  finally{
      return users;
    }
  }
    
