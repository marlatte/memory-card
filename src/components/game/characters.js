async function getCharacters() {
  const response = await fetch('https://api.tvmaze.com/shows/44458/cast');
  const castArray = await response.json();

  return castArray.map((item) => ({
    name: item.character.name,
    id: item.character.id,
    img: item[item.character.id === 773340 ? 'person' : 'character'].image
      .medium,
  }));
}

export default getCharacters;