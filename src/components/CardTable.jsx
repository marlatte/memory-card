/* eslint-disable react/prop-types */
import Card from './Card';

function CardTable({ characters }) {
  return (
    <div className="card-table">
      {characters.map((character) => (
        // eslint-disable-next-line react/no-array-index-key
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CardTable;
