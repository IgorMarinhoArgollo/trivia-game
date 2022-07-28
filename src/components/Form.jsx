import { fetchToken, fetchTrivia } from '../services/api';
import { useSelector, useDispatch } from 'react-redux'
import { nameUpdate } from '../slices/playerInfoSlice';
import { setQuestions } from '../slices/questionsSlice';
import { useNavigate } from 'react-router-dom';
import Start from '../images/start.svg';
import '../styles/css/Form.min.css';


export default function Form() {
  const navigate = useNavigate();
  const name = useSelector((state) => state.playerInfo.name)
  const numberOfQuestions = useSelector((state) => state.questions.numberOfQuestions)
  const dispatch = useDispatch()

  const onSubmit = async () => {
    const token = await fetchToken();
    const questions = await fetchTrivia(token, numberOfQuestions);
    if (window.localStorage.getItem('ranking') === null) {
      window.localStorage.setItem('ranking', '[]')
    }
    dispatch(setQuestions(questions));
    navigate("/game");
  }

  const verifyLogin = (name) => {
    return (!(name.length > 0));
  } 

    return (
      <form>
        <input
          type="text"
          onChange={(event) => dispatch(nameUpdate(event.target.value))}
          placeholder="Place Your Name"
        />

        <button
          className='startButton'
          type="button"
          disabled={verifyLogin(name)}
          onClick={() => onSubmit()}
        >
          <img src={Start} alt="Start Arrow" className='startArrow' />
        </button>
      </form>
    );
  }

