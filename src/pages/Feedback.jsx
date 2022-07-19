import { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default class Feedback extends Component {
  render() {
    const state = JSON.parse(localStorage.getItem('state'));
    const { assertions, score } = state.player;
    const three = 3;
    return (
      <div>
        <Header />
        <span>Feedback Page</span>
        <p>
          {assertions < three ? 'Podia ser melhor...' : 'Mandou bem!'}
        </p>
        <p>{assertions}</p>
        <p>{score}</p>
        <Link to="/">
          <button
            type="button"
          >
            Jogar novamente
          </button>
        </Link>
        <Link to="/ranking">
          <button
            type="button"
          >
            Ver Ranking
          </button>
        </Link>
      </div>
    );
  }
}
