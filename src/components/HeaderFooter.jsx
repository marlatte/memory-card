/* eslint-disable react/prop-types */
import _ from 'lodash';

export function Header({ mode, highScore }) {
  return (
    <header>
      <h1>Ted&apos;s Starting 11</h1>
      <div className="game-info">
        <p className="current-mode">Mode: {_.capitalize(mode)}</p>
        <p className="high-score">High Score: {highScore}</p>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <p>Walker</p>
      <a
        href="https://github.com/marlatte"
        target="_blank"
        rel="noreferrer"
        aria-label="Marlatte's Github"
      >
        <i className="fa fa-github" />
      </a>
      <p>Marlatt</p>
    </footer>
  );
}
