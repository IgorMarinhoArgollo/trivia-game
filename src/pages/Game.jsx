import Header from '../components/Header';
import Question from '../components/Question';
import { useSelector } from 'react-redux';
import Timer from "../components/Timer";



export default function Game() {

  const currentQuestionIndex = useSelector((state) => state.questions.currentQuestion);
  const questions = useSelector((state) => state.questions.questions)

  return (
    <>
      <Header />
      <Timer/>
      <Question element={questions[currentQuestionIndex]} />
    </>
  );
}
