/* eslint-disable react/prop-types */
import { capitalize } from 'lodash';

function StartModal({ setMode, setStart }) {
  const handleModeClick = (e) => {
    const selectedMode = e.target.id;

    setMode(selectedMode);
    setStart(false);
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
              onClick={handleModeClick}
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
