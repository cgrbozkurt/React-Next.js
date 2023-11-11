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

  const addToWatchlist=(product)=>{
    dispatch({type:"ADD_TO_WATCHLIST",payload:product})

  }
  const addToWatched=(product)=>{
    dispatch({type:"ADD_TO_WATCHED",payload:product})
  }


  const removeWatchlist=(id)=>{
    dispatch({type:"REMOVE_FROM_WATCHLIST",payload:id})
  }

  const sendWatched=(product)=>{
    dispatch({type:"REMOVE_FROM_WATCHED",payload:product})
  }

  return (
    <GlobalContext.Provider value={{ addToWatchlist, addToWatched , removeWatchlist,sendWatched, watchlist:state.watchlist, watched:state.watched }}>
      {children}
    </GlobalContext.Provider>
  );
};
