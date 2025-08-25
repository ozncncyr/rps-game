import React from 'react';
import styles from './GameScreen.module.css';

const GameScreen = ({ player, computer }) => (
  <div className={styles.gameScreen}>
    <div className={styles.player}>
      <h3>Player</h3>
      {player && <img src={player.url} alt={player.title} />}
    </div>
    <div className={styles.computer}>
      <h3>Computer</h3>
      {computer && <img src={computer.url} alt={computer.title} />}
    </div>
  </div>
);

export default GameScreen;
