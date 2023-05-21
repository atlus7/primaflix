import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "@/constants";

const initialState = {
  loading: false,
  tvShows: {},
  error: "",
};

export const fetchTvShows = createAsyncThunk("movie/fetchTvShows", () => {
  return axios
    .all([
      axios.get(
        `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&api_key=${API_KEY}`
      ),
      axios.get(
        `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${API_KEY}`
      ),
      axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${API_KEY}`
      ),
    ])
    .then(
      axios.spread((data1, data2, data3) => {
        return {
          airingToday: data1.data.results,
          popular: data2.data.results,
          topRated: data3.data.results,
        };
      })
    );
});

const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTvShows.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTvShows.fulfilled, (state, action) => {
      state.loading = false;
      state.tvShows = action.payload;
      state.error = "";
    });
    builder.addCase(fetchTvShows.rejected, (state, action) => {
      state.loading = false;
      state.tvShows = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default tvSlice.reducer;
