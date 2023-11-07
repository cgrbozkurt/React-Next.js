import  { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// CONTEXT OLUŞTURMA
export const GlobalContext = createContext();
const initialState = {
  watchList: [],
  watched: [],
};

// Provider component
export const AnaSarmalayici = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
console.log(state);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
