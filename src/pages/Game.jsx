import Header from '../components/Header';
import Question from '../components/Question';
import { useSelector } from 'react-redux';
import Timer from "../components/Timer";
import '../styles/css/Game.min.css';


export default function Game() {
  const score = useSelector((state) => state.score.totalScore);

  const currentQuestionIndex = useSelector((state) => state.questions.currentQuestion);
  const questions = useSelector((state) => state.questions.questions)

  return (
    <>
      <Header />
      <div className="timerAndScore">
        <h3 className='scoreOnGame'>{score}</h3>
        <Timer />
      </div>
      <Question element={questions[currentQuestionIndex]} />
    </>
  );
}
