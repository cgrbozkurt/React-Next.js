/* eslint-disable react/prop-types */
import  { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

// CONTEXT OLUŞTURMA
export const GlobalContext = createContext();
const initialState = {

  watched: localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched"))
  :[]
  ,
  watchlist: localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watched")) :[]
  ,
  baybars:12
 
};

// Provider component
export const AnaSarmalayici = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(()=>
  localStorage.setItem("watched",JSON.stringify(state.watched))
  ,[state]);

  useEffect(()=>
  localStorage.setItem("watchlist",JSON.stringify(state.watchlist))
  ,[state])

  const addToWatchlist=(movie)=>{
    dispatch({type:"ADD_TO_WATCHLIST",payload:movie})

  }
  const addToWatched=(movie)=>{
    dispatch({type:"ADD_TO_WATCHED",payload:movie})
  }


  return (
    <GlobalContext.Provider value={{ addToWatchlist, addToWatched ,watchlist:state.watchlist, watched:state.watched }}>
      {children}
    </GlobalContext.Provider>
  );
};
