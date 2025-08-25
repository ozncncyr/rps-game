// ScoreBoard.jsx
import styles from './ScoreBoard.module.css';

const ScoreBoard = ({
  playerScore,
  computerScore,
  resetScores,
  resetMessage,
}) => {
  return (
    <div className={styles.scoreBoard}>
      <h2>Score Board</h2>
      <p>🧑 Player: {playerScore}</p>
      <p>🤖 Computer: {computerScore}</p>

      <button onClick={resetScores} className={styles.resetButton}>
        Reset Scores
      </button>
      {resetMessage && <p className={styles.resetMessage}>{resetMessage}</p>}
    </div>
  );
};

export default ScoreBoard;
