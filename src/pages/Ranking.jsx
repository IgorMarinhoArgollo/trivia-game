import HomeButton from '../components/HomeButton';
import '../styles/css/Ranking.min.css';


export default function Ranking() {
  const ranking = () => {
    let rankingArray = JSON.parse(window.localStorage.getItem('ranking'));
    rankingArray = rankingArray.sort((a, b) => b.score - a.score);
    rankingArray.length = 10;
    return rankingArray;
  }
  const array = ranking()

  return (
    <div>
      <h2 className='rankingTitle'>Ranking</h2>
      <ol>
        {array.map((e) => <li key={e.key}><p>{e.name}</p><p className='scoreResult'>{e.score}</p></li>)}
      </ol>
      <HomeButton />
    </div>
  );
}
