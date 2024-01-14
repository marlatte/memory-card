import PropTypes from 'prop-types';
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

CurrentRound.propTypes = {
  score: PropTypes.number.isRequired,
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  winScore: PropTypes.number.isRequired,
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
  winScore: PropTypes.number.isRequired,
};
