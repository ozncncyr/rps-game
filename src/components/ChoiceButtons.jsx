import React from 'react';
import styles from './ChoiceButtons.module.css';

const ChoiceButtons = ({ data, onChoose, disabled }) => (
  <div className={styles.choiceButtons}>
    {data.map(item => (
      <button
        key={item.id}
        onClick={() => onChoose(item)}
        disabled={disabled}
        className={styles.button}
      >
        {item.title}
      </button>
    ))}
  </div>
);

export default ChoiceButtons;
