/* eslint-disable react/prop-types */
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

  const addToWatchlist=(movie)=>{
    dispatch({type:"ADD_TO_WATCHLIST",payload:movie})

  }
  const addToWatched=(movie)=>{
    dispatch({type:"ADD_TO_WATCHED",payload:movie})
  }


  return (
    <GlobalContext.Provider value={{ addToWatchlist, addToWatched,watchList:state.watchList,watched:state.watched }}>
      {children}
    </GlobalContext.Provider>
  );
};
