import React from 'react';
import styles from './ScoreBoard.module.css';

const ScoreBoard = ({ playerScore, computerScore }) => (
  <div className={styles.scoreBoard}>
    Player {playerScore} - {computerScore} Computer
  </div>
);

export default ScoreBoard;
