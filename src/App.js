import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Game from './pages/Game';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/game" element={<Game />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/ranking" element={<Ranking />} />
    </Routes>
  );
}
