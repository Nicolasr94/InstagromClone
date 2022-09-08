export function MapData (dataToAdapter) {
  let photos=[]
dataToAdapter.photos.forEach((element,index) => {
    photos[index] = {
   alt: element.alt,
   id: element.id,
   liked: element.liked,
   user_name: element.photographer,
   user_id:  element.photographer_id,
   photographer_url: element.photographer_url,
   image_history:element.src.large ,
   image_avatar:element.src.small ,
   image_url:element.src.url
  }
 
})
return photos;
}