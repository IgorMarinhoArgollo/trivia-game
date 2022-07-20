import PropTypes from "prop-types"
import { useSelector, useDispatch } from 'react-redux';
import { updateScore } from '../slices/scoreSlice';
import { increaseCurrentQuestion, rightAnswer } from '../slices/questionsSlice';
import { useNavigate } from 'react-router-dom';
import { resetTimer, clearTime } from '../slices/timerSlice';
import { useEffect } from "react";


export default function Question({ element }) {
  const navigate = useNavigate();
  const timer = useSelector((state) => state.timer.timer)
  const currentQuestion = useSelector((state) => state.questions.currentQuestion)
  const numberOfQuestions = useSelector((state) => state.questions.numberOfQuestions)
  const questions = useSelector((state) => state.questions.questions)
  const playerName = useSelector((state) => state.playerInfo.name)
  const score = useSelector((state) => state.score.totalScore)
  const dispatch = useDispatch();


  const endTurn = (e) => {
    let difficulty;
    if (element.difficulty === 'hard') {
      difficulty = 3;
    }
    else if (element.difficulty === 'medium') {
      difficulty = 2;
    } else {
      difficulty = 1;
    }
    const value = e.target.innerText;
    if (value === element.correct_answer) {
      let score = 10 + (timer * difficulty);
      dispatch(updateScore(score));
      dispatch(rightAnswer())
    }
    document.querySelectorAll('.answers').forEach(elem => {
      elem.style.border = 'solid red';
    })
    document.querySelectorAll('.answers').forEach(elem => {
      if (elem.innerText === element.correct_answer) {
        elem.style.border = 'solid green'
      }
      document.querySelectorAll('.answers').forEach(elem => {
        elem.disabled = true;
      });
    })
    dispatch(clearTime())
  }

  const next = () => {
    if ((currentQuestion + 1) < numberOfQuestions) {
      dispatch(increaseCurrentQuestion(currentQuestion + 1));
      document.querySelectorAll('.answers').forEach(elem => {
        elem.disabled = false;
      })
      dispatch(resetTimer())
      for (let index = 0; index < 4; index += 1) {
        if (document.querySelectorAll('.answers')[index] !== undefined) {
          document.querySelectorAll('.answers')[index].style.border = 'inherit'
        }
      }
    }
    else {
      let currentRanking = JSON.parse(window.localStorage.getItem('ranking'));
      currentRanking.push({ 'name': playerName, 'score': score, 'key': Math.random()});
      window.localStorage.setItem('ranking', JSON.stringify(currentRanking))
      navigate('/feedback')
    }
  }
  if (element !== undefined) {
    return (
      <div>
        <p>{element.difficulty}</p>
        <p>{element.type}</p>
        <p>{element.category}</p>
        <p>{element.question}</p>
        <div>
          {questions[currentQuestion].shuffled.map((element, index) => <button onClick={endTurn} className="answers" type="button" key={index}>{element}</button>)}
        </div>
        <button type="button" onClick={() => next()}>Next</button>
      </div>
    )
  } else {
    useEffect(() => {
      navigate('/');
      alert('Sorry, You have tried to refresh during the game. You be redirected to the start')
    }
    )
  }
}

Question.propTypes = {
  element: PropTypes.object,
  props: PropTypes.shape({
    setTime: PropTypes.func
  })
}
