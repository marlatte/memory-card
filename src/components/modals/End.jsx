/* eslint-disable react/prop-types */

function EndModal({ score, onClick }) {
  return (
    <section className="modal end">
      <div className="content">
        <h1>Game Over!</h1>
        <p>You got {score} right.</p>
        <button type="button" id="restart" onClick={onClick}>
          Restart
        </button>
      </div>
    </section>
  );
}

export default EndModal;
