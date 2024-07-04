import { createContext, useReducer } from "react";

const inicialState = { data: [] };

export const CommentContext = createContext(inicialState);
export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_COMMENTS = "ADD_COMMENTS";

function infoReducer(state, action) {
  switch (action.type) {
    case "GET_COMMENTS":
      return { ...state, data: action.payload };
    case "ADD_COMMENTS":
      return { ...state, data: action.payload };

    default:
      return state;
  }
}

export const CommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(infoReducer, []);
  return (
    <CommentContext.Provider value={{ state, dispatch }}>
      {children}
    </CommentContext.Provider>
  );
};
