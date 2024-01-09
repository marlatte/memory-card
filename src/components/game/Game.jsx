/* eslint-disable react/prop-types */
import { useState } from 'react';
import CurrentRound from './CurrentRound';
import { Header, Footer } from './HeaderFooter';
import getCharacters from './characters';

const characters = await getCharacters();

const sampleCharacters = [];
for (let i = 0; i < 5; i += 1) {
  sampleCharacters.push(characters[i]);
}

function Game({ level, score, setScore, highScore, setHighScore, setEnd }) {
  const [pastClickedIds, setPastClickedIds] = useState([]);

  const handleCardClick = (e) => {
    const clickedId = e.target.closest('[data-character-id]').dataset
      .characterId;

    if (!pastClickedIds.includes(clickedId)) {
      setPastClickedIds(pastClickedIds.concat(clickedId));
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > highScore) setHighScore(newScore);
    } else {
      setEnd(true);
    }
  };

  return (
    <div className="game-container">
      <Header level={level} highScore={highScore} />
      <main>
        <CurrentRound
          characters={sampleCharacters}
          score={score}
          onClick={handleCardClick}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Game;
