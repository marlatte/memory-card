import PropTypes from 'prop-types';
import { capitalize } from 'lodash';

export function Header({ level, highScore }) {
  return (
    <header>
      <h1>Lasso&apos;s Starting Lineup</h1>
      <div className="game-info">
        <p className="current-level">
          <span className="static-text">Game Mode:</span>{' '}
          <span className="variable-text">{capitalize(level)}</span>
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
      <div className="content">
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
      </div>
    </footer>
  );
}

Header.propTypes = {
  level: PropTypes.string.isRequired,
  highScore: PropTypes.number.isRequired,
};
