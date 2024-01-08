/* eslint-disable react/prop-types */
import CurrentRound from './CurrentRound';
import { Header, Footer } from './HeaderFooter';
import characters from './characters';

const sampleCharacters = [];
for (let i = 0; i < 5; i += 1) {
  sampleCharacters.push(characters[i].name);
}

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
