import { useState } from 'react';
import Game from './game/Game';

function App() {
  const [highScore, setHighScore] = useState(0);
  const [mode, setMode] = useState('easy');
  const [start, setStart] = useState(true);

  const checkNewHighScore = (score) => {
    if (score > highScore) setHighScore(score);
  };

  return (
    <Game
      mode={mode}
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
