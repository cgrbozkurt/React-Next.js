import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducer";
import seriesReducer from "./reduser"


const store = configureStore({
  reducer: {
    movies: movieReducer,
 series:seriesReducer

  },
});

export default store;
