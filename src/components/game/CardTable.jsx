import PropTypes from 'prop-types';
import Card from './Card';

function CardTable({ characters, onClick }) {
  return (
    <div className="card-table">
      {characters.map((character) => (
        <Card key={character.id} character={character} onClick={onClick} />
      ))}
    </div>
  );
}

export default CardTable;

CardTable.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
