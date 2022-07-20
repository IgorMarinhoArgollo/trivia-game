import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  name: '',
}

const playerInfoSlice = createSlice({
  name: 'playerinfo',
  initialState: INITIAL_STATE,
  reducers: {
    nameUpdate: (state, action) => {
      state.name = action.payload;
    },
    clearName: (state) => {
      state.name = '';
    }
  }
})

export const { nameUpdate, clearName } = playerInfoSlice.actions

export default playerInfoSlice.reducer
