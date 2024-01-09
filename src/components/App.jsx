import { useState } from 'react';
import Game from './game/Game';
import StartModal from './modals/Start';
import EndModal from './modals/End';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [level, setLevel] = useState('easy');
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);

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
        <Game
          level={level}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
          setEnd={setEnd}
        />
      )}
      {end && <EndModal score={score} onClick={restart} />}
    </>
  );
}

export default App;

/*
Planning:

Game modes:
- Easy: 4 cards
- Medium: 8 cards
- Hard: 15 cards

Components:
- App
  - StartModal
  - Game
    - Header
      - HighScore
    - CurrentRound
      - CardTable
        - Card
      - Score
    - Footer
  - EndModal

*/
