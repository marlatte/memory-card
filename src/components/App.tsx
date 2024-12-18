import { useEffect, useState } from 'react';
import Game from './game/Game.tsx';

const filterCharacterInfo = (castArray: CastMember[]): Character[] =>
  castArray.map((item) => ({
    name: item.character.name,
    id: item.character.id,
    img: item[item.character.id === 773340 ? 'person' : 'character'].image!
      .medium,
  }));

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

export default function App() {
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function getCharacters() {
      const response = await fetch('https://api.tvmaze.com/shows/44458/cast');
      const castArray = (await response.json()) as CastMember[];

      setAllCharacters(filterCharacterInfo(castArray));
    }

    const timeoutId = setTimeout(() => {
      getCharacters();
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return allCharacters.length ? <Game {...{ allCharacters }} /> : <Loader />;
}
