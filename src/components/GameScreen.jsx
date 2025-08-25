import React from 'react';
import styles from './GameScreen.module.css';

const GameScreen = ({ player, computer, isReset }) => {
  const playerImage =
    isReset || !player?.url
      ? 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMjMzMTV8MHwxfHNlYXJjaHwyfHxxdWVzdGlvbiUyMG1hcmt8ZW58MHx8fHwxNzU2MTQ3MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080'
      : player.url;

  const computerImage =
    isReset || !computer?.url
      ? 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMjMzMTV8MHwxfHNlYXJjaHwyfHxxdWVzdGlvbiUyMG1hcmt8ZW58MHx8fHwxNzU2MTQ3MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080'
      : computer.url;

  return (
    <div className={styles.gameScreen}>
      <div className={styles.player}>
        <h3>Player</h3>
        <img src={playerImage} alt={player?.title || 'Player'} />
      </div>
      <div className={styles.computer}>
        <h3>Computer</h3>
        <img src={computerImage} alt={computer?.title || 'Computer'} />
      </div>
    </div>
  );
};

export default GameScreen;
