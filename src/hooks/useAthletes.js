import {useAthleteFetch} from "./index.js"
import {GET_ATHLETES, GET_ATHLETE, ADD_ATHLETES, UPDATE_ATHLETES, DELETE_ATHLETES} from "../context/AthleteContext.jsx"
const BACKENDURL = import.meta.env.VITE_BACKEND_URL

export const useAthletes = () => {
  const {fetchData} = useAthleteFetch();

  const getAllAthletes = async () => {
    try{
    await fetchData("http://localhost:8081/api/v1/athlete/getAllAthletes", GET_ATHLETES)
      }catch (error){
        console.error("Error al obtener los atletas", error)
      }
    };

  const getAthleteById = async (id) => {
    try {
      
    
      //podria poner tb aqui solo return por delante
    const response = await fetchData(`http://localhost:8081/api/v1/athlete/getById/${id}`)
    //  const response = await fetchData(`${BACKENDURL}/api/v1/athlete/getById/${id}`)
    return response
//en esta tengo que poner el return porque es una llamada directa a la api sin tener contexto
} catch (error) {
  console.error("Error al obtener los atletas", error)
}
    
}
  const addAthletes = async (data) => {
    try {
    await fetchData("http://localhost:8081/api/v1/athlete/create", ADD_ATHLETES, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error al obtener los atletas", error)
  }
};

  const updateAthletes = async (id, data) => {
    try {
    await fetchData(`http://localhost:8081/api/v1/athlete/update/${id}`, UPDATE_ATHLETES, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error al obtener los atletas", error)
  }
  };

  const deleteAthleteById = async (id) => {
    try {
    await fetchData(`http://localhost:8081/api/v1/athlete/deleteAthlete/${id}`, DELETE_ATHLETES, {
       method: "DELETE"})
      } catch (error) {
        console.error("Error al obtener los atletas", error)
      }
  }

return {getAllAthletes, getAthleteById, addAthletes, updateAthletes, deleteAthleteById}

};




