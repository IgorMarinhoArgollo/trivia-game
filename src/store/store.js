import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from '../slices/questionsSlice';
import timerReducer from '../slices/timerSlice';
import scoreReducer from '../slices/scoreSlice';
import playerInfoReducer from "../slices/playerInfoSlice";


export const store = configureStore({
  reducer: {
    score: scoreReducer,
    timer: timerReducer,
    questions: questionsReducer,
    playerInfo: playerInfoReducer
  },
})