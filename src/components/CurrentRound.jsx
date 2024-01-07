/* eslint-disable react/prop-types */
import CardTable from './CardTable';

function CurrentRound({ score, players }) {
  return (
    <div className="current-round">
      <CardTable players={players} />
      <Score score={score} />
    </div>
  );
}

function Score({ score }) {
  return <div className="score">{score}/11</div>;
}

export default CurrentRound;
