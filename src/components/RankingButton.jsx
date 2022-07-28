import ranking from '../images/ranking.svg';
import { Link } from 'react-router-dom';
import '../styles/css/RankingButton.min.css';

export default function Settingsbutton() {
  return (
    <Link to="/ranking" >
      <div className="changePageButton">
        <img src={ranking}
          alt="settings icon"
          className='changePageImage' />
      </div>
    </Link>
  );
}


