import PropTypes from 'prop-types';
import { useState } from 'react';
import CurrentRound from './CurrentRound';
import { Header, Footer } from './HeaderFooter';

function CurrentGame({
  level,
  score,
  setScore,
  highScore,
  setHighScore,
  setEnd,
  winScore,
  allCharacters,
}) {
  const [pastClickedIds, setPastClickedIds] = useState([]);
  const levelDisplay = { easy: 5, medium: 10, hard: 15 };

  function getGoodOption(characters, pastIds) {
    const goodOptions = characters.filter((char) => !pastIds.includes(char.id));
    return goodOptions[Math.floor(Math.random() * goodOptions.length)];
  }

  function getBadOption(characters, pastIds) {
    const badOptions = characters.filter((char) => pastIds.includes(char.id));
    return badOptions[Math.floor(Math.random() * badOptions.length)];
  }

  function getCards() {
    const preDisplay = [];
    preDisplay.push(getGoodOption(allCharacters, pastClickedIds));
    if (pastClickedIds.length > 2) {
      preDisplay.push(getBadOption(allCharacters, pastClickedIds));
    }

    while (preDisplay.length < levelDisplay[level]) {
      const num = Math.floor(Math.random() * 15);
      if (!preDisplay.includes(allCharacters[num])) {
        preDisplay.push(allCharacters[num]);
      }
    }

    return preDisplay.sort(() => 0.5 - Math.random());
  }

  const handleCardClick = (e) => {
    const clickedEl = e.target.closest('[data-character-id]');
    clickedEl.blur();
    const clickedId = +clickedEl.dataset.characterId;

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

export default CurrentGame;

CurrentGame.propTypes = {
  level: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  highScore: PropTypes.number.isRequired,
  setHighScore: PropTypes.func.isRequired,
  setEnd: PropTypes.func.isRequired,
  winScore: PropTypes.number.isRequired,
  allCharacters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};
