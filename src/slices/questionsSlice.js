import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  questions: [],
  numberOfQuestions: 5,
  currentQuestion: 0,
  rightAnswer: 0
}

const questionsSlice = createSlice({
  name: 'questions',
  initialState: INITIAL_STATE,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setNumberOfQuestions: (state, action) => {
      state.numberOfQuestions = action.payload;
    },
    increaseCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    rightAnswer: (state) => {
      state.rightAnswer += 1;
    }
  },
})

export const { setQuestions, setNumberOfQuestions, increaseCurrentQuestion, rightAnswer } = questionsSlice.actions

export default questionsSlice.reducer
