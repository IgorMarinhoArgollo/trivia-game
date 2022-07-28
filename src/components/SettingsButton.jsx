import engine from '../images/engine.svg';
import { Link } from 'react-router-dom';

export default function Settingsbutton() {
  return (
    <Link to="/settings">
      <div className="changePageButton">
        <img src={engine} alt="settings icon" className='changePageImage' />
      </div>
    </Link>
  );
}


