/* eslint-disable react/prop-types */

function Card({ name }) {
  return (
    <div className="card">
      <img
        src="https://picsum.photos/200/300"
        alt={name}
        className="player-pic"
      />
      <div className="player-name">{name}</div>
    </div>
  );
}

export default Card;
