import { createContext, useReducer } from "react";

const inicialStateSport = { dataSport: [] };

export const SportContext = createContext(inicialStateSport);
export const GET_SPORTS = "GET_SPORTS";
export const GET_SPORT = "GET_SPORT";
export const ADD_SPORT = "ADD_SPORT";

function sportReducer(stateSport, action) {
  switch (action.type) {
    case "GET_SPORTS":
      return { ...stateSport, dataSport: action.payload };
    case "ADD_SPORT":
      return { ...stateSport, dataSport: action.payload };

    default:
      return stateSport;
  }
}

export const SportProvider = ({ children }) => {
  const [stateSport, dispatch] = useReducer(sportReducer, inicialStateSport);
  return (
    <SportContext.Provider value={{ stateSport, dispatch }}>
      {children}
    </SportContext.Provider>
  );
};
