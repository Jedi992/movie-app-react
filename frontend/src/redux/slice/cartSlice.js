import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
} 

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.items.find(item => (item.kinopoiskId || item.filmId) === (action.payload.kinopoiskId || action.payload.filmId))) {
        state.items.push(action.payload);
      }
    },
    removeItems: (state,action) => {
     state.items = state.items.filter(item => (item.kinopoiskId || item.filmId) !== (action.payload.kinopoiskId || action.payload.filmId))
      
  }
  },
})

export const { addItem, removeItems } = cartSlice.actions

export default cartSlice.reducer