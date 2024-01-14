import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CurrentRound from './CurrentRound';
import { Header, Footer } from './HeaderFooter';

function Mode({
  level,
  score,
  setScore,
  highScore,
  setHighScore,
  setEnd,
  winScore,
}) {
  const [pastClickedIds, setPastClickedIds] = useState([]);
  const [allCharacters, setAllCharacters] = useState('');
  const levelDisplay = { easy: 5, medium: 10, hard: 15 };

  useEffect(() => {
    async function getCharacters() {
      const response = await fetch('https://api.tvmaze.com/shows/44458/cast');
      const castArray = await response.json();

      const charactersArray = castArray.map((item) => ({
        name: item.character.name,
        id: item.character.id,
        img: item[item.character.id === 773340 ? 'person' : 'character'].image
          .medium,
      }));

      setAllCharacters(charactersArray);
    }

    setTimeout(() => {
      getCharacters();
    }, 1000);
  }, []);

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
        {allCharacters ? (
          <CurrentRound
            characters={getCards()}
            score={score}
            winScore={winScore}
            onClick={handleCardClick}
          />
        ) : (
          <Loader />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Mode;

function Loader() {
  return (
    <div className="loader">
      <div className="lds-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

Mode.propTypes = {
  level: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  highScore: PropTypes.number.isRequired,
  setHighScore: PropTypes.func.isRequired,
  setEnd: PropTypes.func.isRequired,
  winScore: PropTypes.number.isRequired,
};
