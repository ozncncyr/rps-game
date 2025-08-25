import React from 'react';
import styles from './ComputerThinking.module.css';

const ComputerThinking = ({ active }) => {
  if (!active) return null;

  return (
    <div className={styles.thinking}>
      <div className={styles.spinner}></div>
      <p>Computer is choosing...</p>
    </div>
  );
};

export default ComputerThinking;
