/* eslint-disable react/prop-types */
import { capitalize } from 'lodash';

function StartModal({ setMode, setStart }) {
  const handleModeClick = (e) => {
    const selectedMode = e.target.id;

    setMode(selectedMode);
    setStart(false);
  };

  return (
    <section className="modal">
      <h1>Lasso Locker Room</h1>
      {['easy', 'medium', 'hard'].map((word) => (
        <button key={word} id={word} type="button" onClick={handleModeClick}>
          {capitalize(word)}
        </button>
      ))}
    </section>
  );
}

export default StartModal;
