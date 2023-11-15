import { createSlice } from "@reduxjs/toolkit";



const seriesSlice = createSlice(
    {
      name:"series",
      initialState:[],
      reducers:{
        setSeries:(state,action)=>{
         return action.payload
        }
      }
    }
  );
  
  
  export const { setSeries } = seriesSlice.actions;
  export default seriesSlice.reducer;
