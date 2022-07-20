import home from '../images/home.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearName } from '../slices/playerInfoSlice'
import { clearAll } from '../slices/questionsSlice';
import { clearScore } from '../slices/scoreSlice';
import { resetTimer } from '../slices/timerSlice';

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
        <img src={home} alt="settings icon" />
      </Link>
    );
}


