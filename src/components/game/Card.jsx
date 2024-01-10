/* eslint-disable react/prop-types */

function Card({ character, onClick }) {
  const nameArray = character.name.split(' ');
  const firstName = character.id === 892095 ? 'Dr. Sharon' : nameArray[0];
  const lastName = nameArray[nameArray.length - 1];

  return (
    <button
      type="button"
      className="card"
      onClick={onClick}
      data-character-id={character.id}
    >
      <img src={character.img} alt={character.name} className="character-pic" />
      <div className="character-name">
        <span className="first-name">{firstName}</span>
        <span className="last-name">{lastName}</span>
      </div>
    </button>
  );
}

export default Card;
