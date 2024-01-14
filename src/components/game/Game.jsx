import { useState } from 'react';
import Mode from './Mode';
import StartModal from '../modals/Start';
import EndModal from '../modals/End';

function Game() {
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
        />
      )}
      {end && (
        <EndModal score={score} onClick={restart} winScore={levelWin[level]} />
      )}
    </>
  );
}

export default Game;
