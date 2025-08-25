import { useState, useEffect } from 'react';
import data from './data/data.json';
import ScoreBoard from './components/ScoreBoard';
import GameScreen from './components/GameScreen';
import ResultBanner from './components/ResultBanner';
import ChoiceButtons from './components/ChoiceButtons';
import ComputerThinking from './components/ComputerThinking';
import { getScoresFromStorage, saveScoresToStorage } from './utils/storage';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
  const [resetMessage, setResetMessage] = useState('');

  const handlePlayerChoice = choice => {
    setButtonsDisabled(true);
    setPlayerChoice(choice);
    setIsComputerThinking(true);

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

      setIsComputerThinking(false);
    }, 1750);

    setTimeout(() => {
      setButtonsDisabled(false);
    }, 2000);
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

  const resetScores = () => {
    try {
      if (playerScore === 0 && computerScore === 0) {
        iziToast.warning({
          title: 'Warning: ',
          message: 'Scores are already reset.',
          position: 'bottomRight',
          timeout: 2500,
          transitionIn: 'fadeInUp',
          transitionOut: 'fadeOut',
        });
        return;
      }
      setPlayerScore(0);
      setComputerScore(0);
      saveScoresToStorage(0, 0);
      setResult('');
      setPlayerChoice(null);
      setComputerChoice(null);

      iziToast.success({
        title: 'Success: ',
        message: 'Scores have been reset.',
        position: 'bottomRight',
        timeout: 2000,
      });
    } catch (error) {
      iziToast.error({
        title: 'Error: ',
        message: 'Scores could not be reset.',
        position: 'bottomRight',
        timeout: 3000,
      });
    }
  };

  const getResultClass = () => {
    if (result === 'Player Wins') return 'win';
    if (result === 'Computer Wins') return 'lose';
    if (result === 'Draw') return 'draw';
    return '';
  };

  return (
    <div className={styles.app}>
      <ScoreBoard
        playerScore={playerScore}
        computerScore={computerScore}
        resetScores={resetScores}
        resetMessage={resetMessage}
      />

      <ResultBanner
        result={isComputerThinking ? '...' : result}
        resultClass={getResultClass()}
      />
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
