import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducer';

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default store;
