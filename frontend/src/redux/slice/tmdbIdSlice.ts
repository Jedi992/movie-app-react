import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCollection = createAsyncThunk(
  "collection/fetch",
  async ({ name, title, first_air_date, id, type }) => {
    let discover = "";
    if (name && first_air_date) {
      discover = "tv";
    } else if (title) {
      discover = "movie";
    } else if (name) {
      discover = "person";
    }
    if (discover === "tv" || "movie" || "person") {
      const tv = await axios.get(
        `https://api.themoviedb.org/3/${discover || type}/${id}?language=ru-RU`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: import.meta.env.VITE_TMDB_KEY,
          },
        },
      );
      return tv.data;
    } else if (type) {
      const tv = await axios.get(
        `https://api.themoviedb.org/3/${discover || type}/${id}?language=ru-RU`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: import.meta.env.VITE_TMDB_KEY,
          },
        },
      );

      return tv.data;
    }
  },
);

interface InitialState {
  status: "idle" | "loading" | "success" | "error";
  id: undefined;
  type: "";
  collection: [];
  movieTvPerson: [];
}

const initialState: InitialState = {
  status: "idle",
  collection: [],
  movieTvPerson: [],
  id: undefined,
  type: "",
};

export const tmdbIdSlice = createSlice({
  name: "idCollection",
  initialState,
  reducers: {
    setCollection(state, action) {
      state.collection = action.payload;
      state.id = action.payload.id;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCollection.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCollection.fulfilled, (state, action) => {
        state.movieTvPerson = action.payload;
        state.status = "success";
      })
      .addCase(fetchCollection.rejected, (state, action) => {
        state.status = "error";
      }),
});

export const { setCollection } = tmdbIdSlice.actions;

export default tmdbIdSlice.reducer;
