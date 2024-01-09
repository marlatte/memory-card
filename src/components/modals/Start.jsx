/* eslint-disable react/prop-types */
import { capitalize } from 'lodash';

function StartModal({ setLevel, setScreen }) {
  const handleLevelClick = (e) => {
    const newLevel = e.target.id;

    setLevel(newLevel);
    setScreen('game');
  };

  return (
    <section className="modal start">
      <div className="content">
        <h1>Ted&apos;s Starting Eleven</h1>
        <div className="buttons">
          {['easy', 'medium', 'hard'].map((word) => (
            <button
              key={word}
              id={word}
              type="button"
              onClick={handleLevelClick}
            >
              {capitalize(word)}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StartModal;
