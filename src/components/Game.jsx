/* eslint-disable react/prop-types */
import CurrentRound from './CurrentRound';
import { Header, Footer } from './HeaderFooter';
import getCharacters from './characters';

const characters = await getCharacters();

const sampleCharacters = [];
for (let i = 0; i < 4; i += 1) {
  sampleCharacters.push(characters[i + 6]);
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
