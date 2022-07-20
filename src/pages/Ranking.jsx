import HomeButton from '../components/HomeButton';


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
      <h2>Ranking</h2>
      <ul>
        {array.map((e) => <li key={e.key} ><p>{e.name}</p><p>{e.score}</p></li>)}
      </ul>
      <HomeButton />
    </div>
  );
}

[].sort
