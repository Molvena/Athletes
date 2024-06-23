import { useFetch } from "./index.jsx"

export const useSports = () => {
    const useGetAllSports = async ()=>{
        useFetch("http://localhost:8081/api/v1/sport/getAllSports")
    }
    console.log("AllSports", useGetAllSports)
  return {useGetAllSports}
  }
