import Game from './Game';

function App() {
  const mode = 'easy';
  return <Game mode={mode} />;
}

export default App;

/*
Planning:

Game modes:
- Easy: 5 cards
- Medium: 12 cards
- Hard: 20 cards

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
