import { useEffect, useState } from 'react';
import Game from './game/Game';

const filterCharacterInfo = (castArray) =>
  castArray.map((item) => ({
    name: item.character.name,
    id: item.character.id,
    img: item[item.character.id === 773340 ? 'person' : 'character'].image
      .medium,
  }));

function App() {
  const [allCharacters, setAllCharacters] = useState('');

  useEffect(() => {
    async function getCharacters() {
      const response = await fetch('https://api.tvmaze.com/shows/44458/cast');
      const castArray = await response.json();

      setAllCharacters(filterCharacterInfo(castArray));
    }

    setTimeout(() => {
      getCharacters();
    }, 1000);
  }, []);

  return allCharacters ? <Game allCharacters={allCharacters} /> : <Loader />;
}

function Loader() {
  return (
    <div className='loader'>
      <div className='content'>
        <div className='lds-spinner'>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}

export default App;
