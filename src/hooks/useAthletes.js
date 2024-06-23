import { useFetch } from "./index.jsx"

export const useAthletes = () => {
    const useGetAllAthletes = async () => {
        useFetch("http://localhost:8081/api/v1/athlete/getAllAthletes")
    }
  return {useGetAllAthletes}
  
}


