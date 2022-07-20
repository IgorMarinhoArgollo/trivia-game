import { useSelector } from "react-redux";
import RankingButton from '../components/RankingButton';
import HomeButton from '../components/HomeButton';



export default function Feedback() {
  const name = useSelector((state) => state.playerInfo.name);
  const numberOfQuestions = useSelector((state) => state.questions.numberOfQuestions)
  const rightAnswers = useSelector((state) => state.questions.rightAnswer)
  const score = useSelector((state) => state.score.totalScore);
  const result = (rightAnswers / numberOfQuestions) * 100

  return (
    <div>
      <h1>{`Player: ${name}`}</h1>
      <h2>{`You got: ${score} points.`}</h2>
      {result >= 80 ? <h2>CONGRATULATIONS! YOU ROCK IT!!!</h2> : ''}
      {result < 80 && result >= 60 ? <h2>You did a great job!</h2> : <h2>Could be better. Try again!</h2>}
      <h2>{`You got ${rightAnswers} of ${numberOfQuestions}`}</h2>
      <RankingButton />
      <HomeButton />
    </div>
  )

}
