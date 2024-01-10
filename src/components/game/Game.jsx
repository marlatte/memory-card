/* eslint-disable react/prop-types */
import { useState } from 'react';
import CurrentRound from './CurrentRound';
import { Header, Footer } from './HeaderFooter';
import getCharacters from './characters';

const allCharacters = await getCharacters();

function Game({
  level,
  score,
  setScore,
  highScore,
  setHighScore,
  setEnd,
  winScore,
}) {
  const [pastClickedIds, setPastClickedIds] = useState([]);

  const levelDisplay = { easy: 5, medium: 10, hard: 15 };

  function getFirstOption() {
    const viableOptions = allCharacters.filter(
      (char) => !pastClickedIds.includes(char.id)
    );
    return viableOptions[Math.floor(Math.random() * viableOptions.length)];
  }

  function getCards() {
    const preDisplay = [];
    preDisplay.push(getFirstOption());

    while (preDisplay.length < levelDisplay[level]) {
      const num = Math.floor(Math.random() * 15);
      if (!preDisplay.includes(allCharacters[num])) {
        preDisplay.push(allCharacters[num]);
      }
    }

    return preDisplay.sort(() => 0.5 - Math.random());
  }

  const handleCardClick = (e) => {
    const clickedId = +e.target.closest('[data-character-id]').dataset
      .characterId;

    if (!pastClickedIds.includes(clickedId)) {
      setPastClickedIds(pastClickedIds.concat(clickedId));
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > highScore) setHighScore(newScore);
      if (newScore >= winScore) setEnd(true);
    } else {
      setEnd(true);
    }
  };

  return (
    <div className="game-container">
      <Header level={level} highScore={highScore} />
      <main>
        <CurrentRound
          characters={getCards()}
          score={score}
          winScore={winScore}
          onClick={handleCardClick}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Game;
