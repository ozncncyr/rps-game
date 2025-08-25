import { useState, useEffect } from 'react';
import data from './data/data.json';
import ScoreBoard from './components/ScoreBoard';
import GameScreen from './components/GameScreen';
import ResultBanner from './components/ResultBanner';
import ChoiceButtons from './components/ChoiceButtons';
import ComputerThinking from './components/ComputerThinking';
import { getScoresFromStorage, saveScoresToStorage } from './utils/storage';

import styles from './App.module.css';

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const initialScores = getScoresFromStorage();
  const [playerScore, setPlayerScore] = useState(initialScores.player);
  const [computerScore, setComputerScore] = useState(initialScores.computer);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [isComputerThinking, setIsComputerThinking] = useState(false);

  const handlePlayerChoice = choice => {
    setButtonsDisabled(true);
    setPlayerChoice(choice);
    setIsComputerThinking(true); // Başladı

    setTimeout(() => {
      const randomId = Math.floor(Math.random() * 3) + 1;
      const compChoice = data.find(item => item.id === randomId);
      setComputerChoice(compChoice);

      const outcome = getResult(choice.title, compChoice.title);
      setResult(outcome);

      if (outcome === 'Player Wins') {
        const newScore = playerScore + 1;
        setPlayerScore(newScore);
        saveScoresToStorage(newScore, computerScore);
      } else if (outcome === 'Computer Wins') {
        const newScore = computerScore + 1;
        setComputerScore(newScore);
        saveScoresToStorage(playerScore, newScore);
      }

      setIsComputerThinking(false); // Bitti
    }, 3000);

    setTimeout(() => {
      setButtonsDisabled(false);
    }, 5000);
  };

  const getResult = (player, computer) => {
    if (player === computer) return 'Draw';
    if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    )
      return 'Player Wins';
    return 'Computer Wins';
  };

  return (
    <div className={styles.app}>
      <ScoreBoard playerScore={playerScore} computerScore={computerScore} />

      <ResultBanner result={result} />
      <GameScreen player={playerChoice} computer={computerChoice} />
      <ChoiceButtons
        data={data}
        onChoose={handlePlayerChoice}
        disabled={buttonsDisabled}
      />
      <ComputerThinking active={isComputerThinking} />
    </div>
  );
}

export default App;
