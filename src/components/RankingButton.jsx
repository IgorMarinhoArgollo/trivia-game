import ranking from '../images/ranking.svg';
import { Link } from 'react-router-dom';

export default function Settingsbutton() {
    return (
      <Link to="/ranking">
          <img src={ranking} alt="settings icon"/>
      </Link>
    );
}


