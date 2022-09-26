import { MapData } from '../Hooks/MapData';

export  function AdapterData (dataToAdapter) {
 let response ={
  'next_page': dataToAdapter.next_page,
  'photos':MapData(dataToAdapter)
}
return response
}





