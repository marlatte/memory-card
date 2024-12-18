import { useState } from 'react';
import CurrentGame from './CurrentGame.tsx';
import StartModal from '../modals/Start.tsx';
import EndModal from '../modals/End.tsx';

export default function Game({
  allCharacters,
}: {
  allCharacters: Character[];
}) {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [level, setLevel] = useState<Level>('easy');
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
