import { useSportFetch } from "./index.js"
import {GET_SPORTS, GET_SPORT, ADD_SPORT} from "../context/index.jsx"


export const useSports = () => {
  const {fetchData} = useSportFetch();
  const getAllSports = async () => {
    fetchData("http://localhost:8081/api/v1/sport/getAllSports", GET_SPORTS)
  }
  
//   const getSportById = async (id) => {
//     fetchData(`http://localhost:8081/api/v1/sport/getByIdSport/${id}`, GET_SPORT)
// }
  // const addSports = async (dataSport) => {
  //   fetchData("http://localhost:8081/api/v1/sport/create", ADD_SPORT, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(dataSport),
  //   });
  // };
 

return {getAllSports,  }
}
