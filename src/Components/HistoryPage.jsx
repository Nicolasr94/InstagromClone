import { useEffect,useState } from 'react';
import { fetchData } from "../Hooks/FetchData";
import HistoryPageLayout from './HistoryPageLayout';



export default function HistoryPage() {
  const [data,setData] = useState();
  useEffect(() => {
    fetchData.feedPhotos()
      .then((data) => setData(data))
  },[])

  if (data !== undefined) {
    return (
      <>
        {
          data.photos.map((users) => <HistoryPageLayout users={users} key={users.id}></HistoryPageLayout>)
        }
      </>
    )
  }
}

