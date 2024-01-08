/* eslint-disable react/prop-types */

function Card({ character, onClick }) {
  return (
    <button
      type="button"
      className="card"
      onClick={onClick}
      data-character-id={character.id}
    >
      <img src={character.img} alt={character.name} className="character-pic" />
      <div className="character-name">{character.name}</div>
    </button>
  );
}

export default Card;
