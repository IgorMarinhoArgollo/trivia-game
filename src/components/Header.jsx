import { useSelector } from 'react-redux';

function Header() {
  const name = useSelector((state) => state.playerInfo.name);
    return (
      <header>
        <h3 className="nameOnFeedback">
          {name}
        </h3>
      </header>
    );
}

export default Header;