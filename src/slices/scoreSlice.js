import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  totalScore: 0,
}

const scoreSlice = createSlice({
  name: 'score',
  initialState: INITIAL_STATE,
  reducers: {
    updateScore: (state, action) => {
      state.totalScore += action.payload
    },
    clearScore: (state) => {
      state.totalScore = 0;
    }
  },
})

export const { updateScore, clearScore } = scoreSlice.actions

export default scoreSlice.reducer
