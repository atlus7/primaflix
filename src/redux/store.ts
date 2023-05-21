import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movieSlice";
import tvReducer from "./features/tvSlice";

const store = configureStore({
  reducer: { movie: movieReducer, tv: tvReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
