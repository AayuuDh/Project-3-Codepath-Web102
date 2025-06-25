import React from 'react';
import './StreakCounter.css';

function StreakCounter({ currentStreak, longestStreak }) {
  return (
    <div className="streak-counter">
      <p>Current Streak: <strong>{currentStreak}</strong></p>
      <p>Longest Streak: <strong>{longestStreak}</strong></p>
    </div>
  );
}

export default StreakCounter;