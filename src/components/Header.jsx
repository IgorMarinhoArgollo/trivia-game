import { useSelector } from 'react-redux';

function Header() {
  const name = useSelector((state) => state.playerInfo.name);
  const score = useSelector((state) => state.score.totalScore);
    return (
      <header>
        <h3>
          {` Player: ${name}`}
        </h3>
        <h3>
          {`SCORE: ${score}`}
        </h3>
      </header>
    );
}

export default Header;