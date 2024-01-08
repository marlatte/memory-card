/* eslint-disable react/prop-types */
import CurrentRound from './CurrentRound';
import { Header, Footer } from './HeaderFooter';
import characters from './characters';

const sampleCharacters = [characters[0].name, characters[1].name];

function Game({ mode }) {
  const highScore = 6;
  return (
    <div className="game-container">
      <Header mode={mode} highScore={highScore} />
      <main>
        <CurrentRound characters={sampleCharacters} score="3" />
      </main>
      <Footer />
    </div>
  );
}

export default Game;
