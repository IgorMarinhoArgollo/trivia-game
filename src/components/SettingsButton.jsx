import engine from '../images/engine.svg';
import { Link } from 'react-router-dom';

export default function Settingsbutton() {
    return (
      <Link to="/settings">
          <img src={engine} alt="settings icon"/>
      </Link>
    );
}


