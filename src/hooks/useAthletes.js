import { useFetch } from "./index.js"
import {GET_ATHLETES, GET_ATHLETE, ADD_ATHLETES} from "../context/infoContext.jsx"


export const useAthletes = () => {
  const useGetAllAthletes = async () => {
        useFetch("http://localhost:8081/api/v1/athlete/getAllAthletes", GET_ATHLETES)
  }
  const useGetById = async (id) => {
    useFetch(`http://localhost:8081/api/v1/athlete/getById/${id}`, GET_ATHLETE)
}
  const UseAddAthletes = async (data) => {
    useFetch(`http://localhost:8081/api/v1/athlete/create`, ADD_ATHLETES, {body:data, method: 'POST'}) ;

  
}
return {useGetAllAthletes, useGetById, UseAddAthletes}
}




