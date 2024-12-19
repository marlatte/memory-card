import { useState } from 'react';
import CurrentRound from './CurrentRound.tsx';
import { Header, Footer } from './HeaderFooter.tsx';

interface ClickedButton extends HTMLElement {
  dataset: { characterId: string };
}

export default function CurrentGame({
  level,
  currentScore,
  setCurrentScore,
  highScore,
  setHighScore,
  setEnd,
  scoreToWin,
  allCharacters,
}: {
  level: string;
  currentScore: number;
  setCurrentScore: (val: number) => void;
  highScore: number;
  setHighScore: (val: number) => void;
  setEnd: (val: boolean) => void;
  scoreToWin: number;
  allCharacters: Character[];
}) {
  const [pastClickedIds, setPastClickedIds] = useState<number[]>([]);
  const numberOfOptions = { easy: 5, medium: 10, hard: 15 };

  function getGoodOption(characters: Character[], pastIds: number[]) {
    const goodOptions = characters.filter((char) => !pastIds.includes(char.id));
    return goodOptions[Math.floor(Math.random() * goodOptions.length)];
  }

  function getBadOption(characters: Character[], pastIds: number[]) {
    const badOptions = characters.filter((char) => pastIds.includes(char.id));
    return badOptions[Math.floor(Math.random() * badOptions.length)];
  }

  function getCards() {
    const preDisplay = [];
    preDisplay.push(getGoodOption(allCharacters, pastClickedIds));
    if (pastClickedIds.length > 2) {
      preDisplay.push(getBadOption(allCharacters, pastClickedIds));
    }

    while (
      preDisplay.length < numberOfOptions[level as keyof typeof numberOfOptions]
    ) {
      const num = Math.floor(Math.random() * 15);
      if (!preDisplay.includes(allCharacters[num])) {
        preDisplay.push(allCharacters[num]);
      }
    }

    return preDisplay.sort(() => 0.5 - Math.random());
  }

  const handleCardClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = e.target as HTMLElement;
    const clickedEl = target.closest('[data-character-id]') as ClickedButton;
    clickedEl.blur();
    const clickedId = +clickedEl.dataset.characterId;

    if (!pastClickedIds.includes(clickedId)) {
      setPastClickedIds(pastClickedIds.concat(clickedId));
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      if (newScore > highScore) setHighScore(newScore);
      if (newScore >= scoreToWin) setEnd(true);
    } else {
      setEnd(true);
    }
  };

  return (
    <div className='game-container'>
      <Header level={level} highScore={highScore} />
      <main>
        <CurrentRound
          characters={getCards()}
          currentScore={currentScore}
          scoreToWin={scoreToWin}
          onClick={handleCardClick}
        />
      </main>
      <Footer />
    </div>
  );
}
