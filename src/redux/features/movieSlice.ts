import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API_KEY } from "@/constants";

const initialState = {
  loading: false,
  movies: {},
  error: "",
};

export const fetchMovies = createAsyncThunk("movie/fetchMovies", () => {
  return axios
    .all([
      axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&page=1&api_key=${API_KEY}`
      ),
    ])
    .then(
      axios.spread((data1, data2, data3) => {
        return {
          nowPlaying: data1.data.results,
          popular: data2.data.results,
          topRated: data3.data.results,
        };
      })
    );
});

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
      state.error = "";
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.movies = [];
      state.error = action.error.message || "undefined";
    });
  },
});

export default movieSlice.reducer;
