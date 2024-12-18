import Card from './Card.tsx';

function Score({
  currentScore,
  scoreToWin,
}: {
  currentScore: number;
  scoreToWin: number;
}) {
  return (
    <div className='currentScore'>
      {currentScore} / {scoreToWin}
    </div>
  );
}

export default function CurrentRound({
  currentScore,
  characters,
  onClick,
  scoreToWin,
}: {
  currentScore: number;
  scoreToWin: number;
  characters: Character[];
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <div className='current-round'>
      <div className='card-table'>
        {characters.map((character) => (
          <Card key={character.id} {...{ character, onClick }} />
        ))}
      </div>
      <Score currentScore={currentScore} scoreToWin={scoreToWin} />
    </div>
  );
}
