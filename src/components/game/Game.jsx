import PropTypes from 'prop-types';
import { useState } from 'react';
import CurrentGame from './CurrentGame.tsx';
import StartModal from '../modals/Start';
import EndModal from '../modals/End';

function Game({ allCharacters }) {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [level, setLevel] = useState('easy');
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);

  const scoreToWin = { easy: 7, medium: 11, hard: 15 }[level];

  const restart = () => {
    setEnd(false);
    setCurrentScore(0);
    setStart(true);
  };

  return (
    <>
      {start ? (
        <StartModal setStart={setStart} setLevel={setLevel} />
      ) : (
        <CurrentGame
          {...{
            level,
            currentScore,
            setCurrentScore,
            highScore,
            setHighScore,
            setEnd,
            allCharacters,
            scoreToWin,
          }}
        />
      )}
      {end && <EndModal onClick={restart} {...{ currentScore, scoreToWin }} />}
    </>
  );
}

export default Game;

Game.propTypes = {
  allCharacters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};
