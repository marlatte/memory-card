export default function Card({
  character,
  onClick,
}: {
  character: Character;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  const nameArray = character.name.split(' ');
  const firstName = character.id === 892095 ? 'Dr. Sharon' : nameArray[0];
  const lastName = nameArray[nameArray.length - 1];

  return (
    <button
      type='button'
      className='card'
      data-character-id={character.id}
      {...{ onClick }}
    >
      <img
        src={character.img}
        alt={character.name}
        className='character-pic'
        height={295}
      />
      <div className='character-name'>
        <span className='first-name'>{firstName}</span>
        <span className='last-name'>{lastName}</span>
      </div>
    </button>
  );
}
