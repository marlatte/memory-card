/* eslint-disable react/prop-types */

function Card({ character }) {
  return (
    <button
      type="button"
      className="card"
      onClick={() => {
        console.log(character.name);
      }}
    >
      <img src={character.img} alt={character.name} className="character-pic" />
      <div className="character-name">{character.name}</div>
    </button>
  );
}

export default Card;
