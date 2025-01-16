import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchKeyword: '',
  items: []
} 

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchItem(state, action) {
        state.items = action.payload
    },
    searchKeyWord(state, action) {
      state.searchKeyword = action.payload
      
    }
  },
})

export const { searchItem, searchKeyWord } = searchSlice.actions

export default searchSlice.reducer