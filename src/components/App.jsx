import { useState } from 'react';
import Game from './game/Game';
import StartModal from './modals/Start';

function App() {
  const [highScore, setHighScore] = useState(0);
  const [level, setLevel] = useState('');
  const [screen, setScreen] = useState('start');

  const checkNewHighScore = (score) => {
    if (score > highScore) setHighScore(score);
  };

  return screen === 'start' ? (
    <StartModal setScreen={setScreen} setLevel={setLevel} />
  ) : (
    <Game
      level={level}
      highScore={highScore}
      checkNewHighScore={checkNewHighScore}
    />
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
