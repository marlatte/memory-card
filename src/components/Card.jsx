/* eslint-disable react/prop-types */

function Card({ name }) {
  return (
    <button
      type="button"
      className="card"
      onClick={() => {
        console.log(name);
      }}
    >
      <img
        src="https://picsum.photos/200/300"
        alt={name}
        className="player-pic"
      />
      <div className="player-name">{name}</div>
    </button>
  );
}

export default Card;
