/* eslint-disable react/prop-types */
import Card from './Card';

function CardTable({ characters }) {
  return (
    <div className="card-table">
      {characters.map((player, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Card key={index} player={player} />
      ))}
    </div>
  );
}

export default CardTable;
