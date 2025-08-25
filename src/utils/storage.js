export const getScoresFromStorage = () => {
  const stored = localStorage.getItem('rpsScores');
  return stored ? JSON.parse(stored) : { player: 0, computer: 0 };
};

export const saveScoresToStorage = (player, computer) => {
  localStorage.setItem('rpsScores', JSON.stringify({ player, computer }));
};
