/* eslint-disable react/prop-types */

function EndModal({ score, winScore, onClick }) {
  const win = score === winScore;
  return (
    <section className="modal end">
      <div className="content">
        <h1>{win ? 'Hurray, you win!' : 'Oh no, you lose!'}</h1>
        <p>You got {score} right.</p>
        <button type="button" id="restart" onClick={onClick}>
          Restart
        </button>
      </div>
    </section>
  );
}

export default EndModal;
