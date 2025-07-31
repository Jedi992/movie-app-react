import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchShows = createAsyncThunk(
  "films/fetchFilmsStatus",
  async ({
    params,
    typeFilm,
    pageNum,
  }: {
    params: string;
    typeFilm: string;
    pageNum: Number;
  }) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${typeFilm}/${params}?include_adult=false&include_video=false&language=ru-RU&page=${pageNum}&sort_by=popularity.desc`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: import.meta.env.VITE_TMDB_KEY,
        },
      },
    );
    return { data: res.data, type: params, page: pageNum };
  },
);

interface InitialState {
  film: null;
  tvshows: null;
  status: "idle" | "loading" | "success" | "error";
  statusFilm: "idle" | "loading" | "success" | "error";
  statusTvShows: "idle" | "loading" | "success" | "error";
  currentPage: number;
}

const initialState: InitialState = {
  film: null,
  tvshows: null,
  status: "idle",
  statusFilm: "idle",
  statusTvShows: "idle",
  currentPage: 1,
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSaveParams(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchShows.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchShows.fulfilled, (state, action) => {
        const { data, type } = action.payload;
        if (type === "movie") {
          state.film = data;
          state.statusFilm = "success";
        } else {
          state.tvshows = data;
          state.statusTvShows = "success";
        }
        if (state.film && state.tvshows !== null) {
          state.status = "success";
        }
      })
      .addCase(fetchShows.rejected, (state, action) => {
        state.status = "error";
      }),
});

export const { setCurrentPage, setSaveParams } = filmSlice.actions;

export default filmSlice.reducer;
