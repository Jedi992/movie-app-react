import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
} 

export const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    setItems(state, action) {
        state.items = action.payload   
    },
  },
})

export const { setItems } = filmSlice.actions

export default filmSlice.reducer