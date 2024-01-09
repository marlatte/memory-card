/* eslint-disable react/prop-types */
import { capitalize } from 'lodash';

export function Header({ mode, highScore }) {
  return (
    <header>
      <h1>Ted&apos;s Starting Eleven</h1>
      <div className="game-info">
        <p className="current-mode">
          <span className="static-text">Game Mode:</span>{' '}
          <span className="variable-text">{capitalize(mode)}</span>
        </p>
        <p className="high-score">
          <span className="static-text">High Score:</span>{' '}
          <span className="variable-text">{highScore}</span>
        </p>
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
