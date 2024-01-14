import PropTypes from 'prop-types';
import { useState } from 'react';
import Mode from './Mode';
import StartModal from '../modals/Start';
import EndModal from '../modals/End';

function Game({ allCharacters }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [level, setLevel] = useState('easy');
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);

  const levelWin = { easy: 7, medium: 11, hard: 15 };

  const restart = () => {
    setEnd(false);
    setScore(0);
    setStart(true);
  };

  return (
    <>
      {start ? (
        <StartModal setStart={setStart} setLevel={setLevel} />
      ) : (
        <Mode
          level={level}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
          setEnd={setEnd}
          winScore={levelWin[level]}
          allCharacters={allCharacters}
        />
      )}
      {end && (
        <EndModal score={score} onClick={restart} winScore={levelWin[level]} />
      )}
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
