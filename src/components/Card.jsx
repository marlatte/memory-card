/* eslint-disable react/prop-types */

function Card({ player }) {
  return (
    <button
      type="button"
      className="card"
      onClick={() => {
        console.log(player);
      }}
    >
      <img
        src="https://picsum.photos/200/300"
        alt={player}
        className="player-pic"
      />
      <div className="player-name">{player}</div>
    </button>
  );
}

export default Card;
