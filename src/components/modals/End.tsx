export default function EndModal({
  currentScore,
  scoreToWin,
  onClick,
}: {
  currentScore: number;
  scoreToWin: number;
  onClick: () => void;
}) {
  const win = currentScore === scoreToWin;
  return (
    <section className='modal end'>
      <div className='content'>
        <h1>{win ? 'Hurray, you win!' : 'Oh no, you lose!'}</h1>
        <p>You got {currentScore} right.</p>
        <button type='button' id='restart' onClick={onClick}>
          Restart
        </button>
      </div>
    </section>
  );
}
