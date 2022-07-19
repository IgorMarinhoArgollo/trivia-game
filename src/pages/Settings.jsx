import { useDispatch } from "react-redux";
import { setNumberOfQuestions } from '../slices/questionsSlice' 
import HomeButton from '../components/HomeButton'

export default function Settings() {
  const dispatch = useDispatch();

  const changeNumberOfQuestions = () => {
    dispatch(setNumberOfQuestions(Number(document.querySelector('#numberOfQuestions').value)))
  }

  return (
    <form>
      <h2>Settings</h2>
      <input type="text" placeholder='Number of Questions' id="numberOfQuestions"/>
      <button type='button' onClick={() => changeNumberOfQuestions()}> Set</button>
      <HomeButton />
    </form>
  );
}
