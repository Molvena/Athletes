//Vamos a crear un context para listar los athletes u otra información que tengamos en nuestro estado
//Así podremos compartirlo con las distintas partes de nuestra aplicación

//Paso 1 creamos un contexto para crear un listado de athletas u otros que sera lo que despues renderice
//Paso 2 Definimos un función reducer para añadir atletas u otros a mi listado
//  El state es mi estado inicial
//  Action es la acción que se realizara sobre mi estado
//  El payload suele ser un objeto con el tipo de acción y la información necesaria para realizar la acción.
//  El infoReducer nos devuelve un metodo para mofdificar nuestro estado actual
//  En base al estado inicial lo modificamos.
//  Necesitamos que nuestro estado genere un nuevo registro en memoria
//  para devolver el el estado antiguo con la nueva información, que es el payload.

//Paso 3: Crear el provider que contendra el estado y la función reductora
//  El state inicial es un array vacio (se define al final de la línea 34)
//

import { createContext, useReducer } from "react";

const inicialState = { data: [] };

export const AthleteContext = createContext(inicialState);
export const GET_ATHLETES = "GET_ATHLETES";
export const GET_ATHLETE = "GET_ATHLETE";
export const ADD_ATHLETES = "ADD_ATHLETES";
export const UPDATE_ATHLETES = "UPDATE_ATHLETES";
export const DELETE_ATHLETES = "DELETE_ATHLETES";

function infoReducer(state, action) {
  switch (action.type) {
    case "GET_ATHLETES":
      return { ...state, data: action.payload };
    case "GET_ATHLETE":
      return { ...state, data: action.payload };
    case "ADD_ATHLETES":
      return { ...state, data: action.payload };
    case "UPDATE_ATHLETES":
      return { ...state, data: action.payload };
    case "DELETE_ATHLETES":
      return { ...state, data: action.payload };

    default:
      return state;
  }
}

export const AthleteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(infoReducer, inicialState);
  return (
    <AthleteContext.Provider value={{ state, dispatch }}>
      {children}
    </AthleteContext.Provider>
  );
};
