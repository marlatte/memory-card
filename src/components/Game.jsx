/* eslint-disable react/prop-types */
import CurrentRound from './CurrentRound';
import { Header, Footer } from './HeaderFooter';

const names = ['Ted', 'Beard', 'Danny', 'Roy'];

function Game({ mode }) {
  const highScore = 6;
  return (
    <div className="game-container">
      <Header mode={mode} highScore={highScore} />
      <CurrentRound players={names} score="3" />
      <Footer />
    </div>
  );
}

export default Game;
