import { useSelector } from "react-redux";
import RankingButton from '../components/RankingButton';
import HomeButton from '../components/HomeButton';
import '../styles/css/Feedback.min.css';



export default function Feedback() {
  const name = useSelector((state) => state.playerInfo.name);
  const numberOfQuestions = useSelector((state) => state.questions.numberOfQuestions)
  const rightAnswers = useSelector((state) => state.questions.rightAnswer)
  const score = useSelector((state) => state.score.totalScore);
  const result = (rightAnswers / numberOfQuestions) * 100

  return (
    <div>
      <h1 className="nameOnFeedback">{name}</h1>
      <h2 className="scoreOnFeedback">{score}</h2>
      {result >= 80 ? <h2>CONGRATULATIONS! YOU ROCK IT!!!</h2> : ''}
      {result < 80 && result >= 60 ? <h2>You did a great job!</h2> : <h2>Could be better. Try again!</h2>}
      <div className="rightOfTotal">
        <h2 className="rights">{rightAnswers} </h2>
        <h2 className="outOf">{numberOfQuestions}</h2>
      </div>
      <div className="rankingDiv">
        <RankingButton />
      </div>
      <HomeButton />
    </div>
  )

}
