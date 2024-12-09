import { capitalize } from 'lodash';

export default function StartModal({
  setLevel,
  setStart,
}: {
  setLevel: (newLevel: string) => void;
  setStart: (showStartWindow: boolean) => void;
}) {
  const handleLevelClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = e.target as HTMLElement;
    const newLevel = target.id;

    setLevel(newLevel);
    setStart(false);
  };

  return (
    <section className='modal start'>
      <div className='content'>
        <h1>AFC Richmond needs your help!</h1>
        <p>
          Coach Lasso and the Greyhounds need to field teams for a charity
          tournament raising money to{' '}
          <span className='ital'>teach Brett Goldstein how to run</span>. Pick
          your players without doubling up and you&apos;re sure to win it all!
        </p>
        <div className='buttons'>
          {['easy', 'medium', 'hard'].map((word) => (
            <button
              key={word}
              id={word}
              type='button'
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
