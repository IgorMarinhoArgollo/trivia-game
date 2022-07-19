import home from '../images/home.svg';
import { Link } from 'react-router-dom';

export default function Settingsbutton() {
    return (
      <Link to="/">
          <img src={home} alt="settings icon"/>
      </Link>
    );
}


