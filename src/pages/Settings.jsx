import { useDispatch } from "react-redux";
import { setNumberOfQuestions } from '../slices/questionsSlice'
import HomeButton from '../components/HomeButton'
import '../styles/css/Settings.min.css';

export default function Settings() {
  const dispatch = useDispatch();

  const changeNumberOfQuestions = () => {
    dispatch(setNumberOfQuestions(Number(document.querySelector('#numberOfQuestions').value)))
  }

  return (
    <form className="settings">
      <h2 className="settingsTitle">Settings</h2>
      <input type="text" placeholder='Number of Questions' id="numberOfQuestions" />
      <button type='button' onClick={() => changeNumberOfQuestions()} className='settingsButton'> Set</button>
      <HomeButton />
    </form>
  );
}
