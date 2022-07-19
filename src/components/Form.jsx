import { fetchToken, fetchTrivia } from '../services/api';
import { useSelector, useDispatch } from 'react-redux'
import { nameUpdate } from '../slices/playerInfoSlice';
import { setQuestions } from '../slices/questionsSlice';
import { useNavigate } from 'react-router-dom';


export default function Form() {
  const navigate = useNavigate();
  const name = useSelector((state) => state.playerInfo.name)
  const numberOfQuestions = useSelector((state) => state.questions.numberOfQuestions)
  const dispatch = useDispatch()

  const onSubmit = async () => {
    const token = await fetchToken();
    const questions = await fetchTrivia(token, numberOfQuestions);
    dispatch(setQuestions(questions));
    navigate("/game");
  }

  const verifyLogin = (name) => {
    return (!(name.length > 0));
  } 

    return (
      <form>
        <input
          id="name"
          type="text"
          onChange={(event) => dispatch(nameUpdate(event.target.value))}
          placeholder="name"
        />

         <button
          type="button"
          disabled={verifyLogin(name)}
          onClick={() => onSubmit()}
        >
          START
        </button>
      </form>
    );
  }

