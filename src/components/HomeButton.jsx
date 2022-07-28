import home from '../images/home.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearName } from '../slices/playerInfoSlice'
import { clearAll } from '../slices/questionsSlice';
import { clearScore } from '../slices/scoreSlice';
import { resetTimer } from '../slices/timerSlice';
import '../styles/css/HomeButton.min.css';

export default function Settingsbutton() {
  const dispatch = useDispatch();

  const clear = () => {
    dispatch(clearAll());
    dispatch(clearScore());
    dispatch(resetTimer());
    dispatch(clearName())
  }

  return (
    <Link to="/" onClick={() => clear()}>
      <div className='homeButton'>
        <img src={home} alt="settings icon" className='changePageImage' />
      </div>
    </Link>
  );
}


