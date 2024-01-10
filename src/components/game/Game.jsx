/* eslint-disable react/prop-types */
import { useState } from 'react';
import CurrentRound from './CurrentRound';
import { Header, Footer } from './HeaderFooter';
import getCharacters from './characters';

const allCharacters = await getCharacters();

function Game({ level, score, setScore, highScore, setHighScore, setEnd }) {
  const [pastClickedIds, setPastClickedIds] = useState([]);

  const levelMap = { easy: 5, medium: 10, hard: 15 };

  function getCards() {
    const displayed = [];
    let needsFirstOption = true;

    while (displayed.length < levelMap[level]) {
      const num = Math.floor(Math.random() * 15);
      if (!displayed.includes(allCharacters[num])) {
        if (needsFirstOption) {
          if (!pastClickedIds.includes(allCharacters[num].id)) {
            displayed.push(allCharacters[num]);
            needsFirstOption = false;
          }
        } else {
          displayed.push(allCharacters[num]);
        }
      }
    }

    return displayed;
  }

  const filteredCharacters = getCards();

  const handleCardClick = (e) => {
    const clickedId = e.target.closest('[data-character-id]').dataset
      .characterId;

    if (!pastClickedIds.includes(clickedId)) {
      setPastClickedIds(pastClickedIds.concat(+clickedId));
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > highScore) setHighScore(newScore);
    } else {
      setEnd(true);
    }
  };

  if (score === 11) setEnd(true);

  return (
    <div className="game-container">
      <Header level={level} highScore={highScore} />
      <main>
        <CurrentRound
          characters={filteredCharacters}
          score={score}
          onClick={handleCardClick}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Game;
