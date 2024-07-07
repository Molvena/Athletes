import {useAthleteFetch} from "./index.js"
import {GET_ATHLETES, GET_ATHLETE, ADD_ATHLETES, UPDATE_ATHLETES, DELETE_ATHLETES} from "../context/AthleteContext.jsx"


export const useAthletes = () => {
  const {fetchData} = useAthleteFetch();

  const getAllAthletes = async () => {
   await fetchData("http://localhost:8081/api/v1/athlete/getAllAthletes", GET_ATHLETES)
  }

  const getAthleteById = async (id) => {
      //podria poner tb aqui solo return por delante
    const response = await fetchData(`http://localhost:8081/api/v1/athlete/getById/${id}`, GET_ATHLETE)
    
    return response
//en esta tengo que poner el return porque es una llamada directa a la api sin tener contexto
    
}
  const addAthletes = async (data) => {
    await fetchData("http://localhost:8081/api/v1/athlete/create", ADD_ATHLETES, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };
  const updateAthletes = async (id, data) => {
    await fetchData(`http://localhost:8081/api/v1/athlete/update/${id}`, UPDATE_ATHLETES, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };
  const deleteAthleteById = async (id) => {
    await fetchData(`http://localhost:8081/api/v1/athlete/deleteAthlete/${id}`, DELETE_ATHLETES, {
       method: "DELETE"})
  }

return {getAllAthletes, getAthleteById, addAthletes, updateAthletes, deleteAthleteById}
}




