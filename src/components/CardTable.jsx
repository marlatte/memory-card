/* eslint-disable react/prop-types */
import Card from './Card';

function CardTable({ names }) {
  return (
    <div className="card-table">
      {names.map((name, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Card key={index} name={name} />
      ))}
    </div>
  );
}

export default CardTable;
