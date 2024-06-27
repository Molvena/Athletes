import { useFetch } from "./index.js"

export const useSports = () => {
    const useGetAllSports = async ()=>{
        useFetch("http://localhost:8081/api/v1/sport/getAllSports")
    }
    console.log("AllSports", useGetAllSports);

    const useGetSportById = async (id)=>{
        useFetch(`http://localhost:8081/api/v1/sport/getByIdSport/${id}`)
    }


  return {useGetAllSports, useGetSportById}
  }
