/* eslint-disable react/prop-types */
import _ from 'lodash';

export function Header({ mode, highScore }) {
  return (
    <header>
      <h1>Ted&apos;s Starting 11</h1>
      <div className="game-info">
        <p className="current-mode">
          <span className="static-text">Game Mode:</span>{' '}
          <span className="variable-text">{_.capitalize(mode)}</span>
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
