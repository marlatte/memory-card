/* eslint-disable react/prop-types */
import CardTable from './CardTable';

function CurrentRound({ score, characters, onClick, winScore }) {
  return (
    <div className="current-round">
      <CardTable characters={characters} onClick={onClick} />
      <Score score={score} winScore={winScore} />
    </div>
  );
}

function Score({ score, winScore }) {
  return (
    <div className="score">
      {score} / {winScore}
    </div>
  );
}

export default CurrentRound;
