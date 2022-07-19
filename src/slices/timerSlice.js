import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  timer: 30,
}

const timerSlice = createSlice({
  name: 'timer',
  initialState: INITIAL_STATE,
  reducers: {
    timerDecrement: (state) => {
      state.timer = state.timer ? state.timer -= 1 : 0;
    },
    clearTime: (state) => {
      state.timer = 0;
    },
    resetTimer: (state) => {
      state.timer = 30;
    },
  },
})

export const { timerDecrement, clearTime, resetTimer } = timerSlice.actions

export default timerSlice.reducer
