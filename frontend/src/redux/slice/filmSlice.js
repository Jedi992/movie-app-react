import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  items: [],
  status: 'Загрузка',
  pagination: 0,
  currentPage: 1,
} 
export const fetchFilms = createAsyncThunk(
  'films/fetchFilmsStatus',
  async (params) => {
    const {pageid} = params
    const res = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films?page=${pageid || 1}`  , {
            headers: {
                'X-API-KEY': '229eed78-a9a7-44b0-ae3b-73d7798e927c',
                'Content-Type': 'application/json',
            },
          })
          console.log(res.data)
          return res.data
        
  },
)

export const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    setItems(state, action) {
        state.items = action.payload   
    },
    setCurrentPage(state,action) {
      state.currentPage = action.payload
    }
  },
  extraReducers: (builder) => builder
  .addCase(fetchFilms.pending, (state, action) => {
    state.status = 'Загрузка'
    state.items = []
  })
  .addCase(fetchFilms.fulfilled, (state, action) => {
    state.items = action.payload
    state.pagination = action.payload.totalPages
    state.status = 'Успешно'
  })
  .addCase(fetchFilms.rejected, (state, action) => {
    state.status = 'Ошибка загрузки';
    state.items = [];
  })
})

export const { setItems,pagination,setCurrentPage } = filmSlice.actions

export default filmSlice.reducer