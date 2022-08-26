// import { useFetchAPI } from "../Hooks/useFetchAPI";



// export default function ShowApi () {
//   const PhotoList = () => {
//     const [photo, setPhotos] = useState([]);
//     const [searchTitle, setSearchTitle] = useState("");
//     const { fetchData, data, loading, error } = useFetchAPI();
//   }

//   useEffect(() => {
//     if (data) {
//       setTutorials(data);
//       console.log(data);
//     } else {
//       setTutorials([]);
//     }
//   }, [data]);
//   useEffect(() => {
//     if (error) {
//       console.log(error);
//     }
//   }, [error]);
//   useEffect(() => {
//     if (loading) {
//       console.log("retrieving tutorials...");
//     }
//   }, [loading]);
//   const onChangeSearchTitle = (e) => {
//     const searchTitle = e.target.value;
//     setSearchTitle(searchTitle);
//   };
//   const findByTitle = () => {
//     fetchData();
//   };
// return(
//   <div>
    
//   </div>
// )

// }