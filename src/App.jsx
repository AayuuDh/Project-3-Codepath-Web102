import React, { useState, useEffect } from 'react';
import Flashcard from './components/Flashcard';
import GuessInput from './components/GuessInput';
import StreakCounter from './components/StreakCounter';
import './App.css';

const initialCardSet = [
    { question: '/Project-3-Codepath-Web102/Armenia.png', answer: 'Armenia', continent: 'Asia' },
    { question: `${import.meta.env.BASE_URL}Australia.png`, answer: 'Australia', continent: 'Oceania' },
    { question: `${import.meta.env.BASE_URL}Bahamas.png`, answer: 'Bahamas', continent: 'North America' },
    { question: `${import.meta.env.BASE_URL}Bhutan.png`, answer: 'Bhutan', continent: 'Asia' },
    { question: `${import.meta.env.BASE_URL}Bolivia.png`, answer: 'Bolivia', continent: 'South America' },
    { question: `${import.meta.env.BASE_URL}Brunei.png`, answer: 'Brunei', continent: 'Asia' },
    { question: `${import.meta.env.BASE_URL}Chile.png`, answer: 'Chile', continent: 'South America' },
    { question: `${import.meta.env.BASE_URL}Dominican Republic.png`, answer: 'Dominican Republic', continent: 'North America' },
    { question: `${import.meta.env.BASE_URL}Finland.png`, answer: 'Finland', continent: 'Europe' },
    { question: `${import.meta.env.BASE_URL}France.png`, answer: 'France', continent: 'Europe' },
    { question: `${import.meta.env.BASE_URL}Germany.png`, answer: 'Germany', continent: 'Europe' },
    { question: `${import.meta.env.BASE_URL}Ghana.png`, answer: 'Ghana', continent: 'Africa' },
    { question: `${import.meta.env.BASE_URL}Iran.png`, answer: 'Iran', continent: 'Asia' },
    { question: `${import.meta.env.BASE_URL}Israel.png`, answer: 'Israel', continent: 'Asia' },
    { question: `${import.meta.env.BASE_URL}Japan.png`, answer: 'Japan', continent: 'Asia' },
    { question: `${import.meta.env.BASE_URL}Madagascar.png`, answer: 'Madagascar', continent: 'Africa' },
    { question: `${import.meta.env.BASE_URL}Mozambique.png`, answer: 'Mozambique', continent: 'Africa' },
    { question: `${import.meta.env.BASE_URL}Nepal.png`, answer: 'Nepal', continent: 'Asia' },
    { question: `${import.meta.env.BASE_URL}Oman.jpg`, answer: 'Oman', continent: 'Asia' },
    { question: `${import.meta.env.BASE_URL}Trinidad and Tobago.png`, answer: 'Trinidad and Tobago', continent: 'South America' },
    { question: `${import.meta.env.BASE_URL}Uruguay.png`, answer: 'Uruguay', continent: 'South America' },
    { question: `${import.meta.env.BASE_URL}Wales.png`, answer: 'Wales', continent: 'Europe' }
];

function App() {
  const [cards, setCards] = useState(initialCardSet);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [guessStatus, setGuessStatus] = useState('');
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const handleNextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      resetCardState();
    }
  };

  const handlePreviousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      resetCardState();
    }
  };

  const handleShuffle = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setCurrentIndex(0);
    resetCardState();
  };

  const handleGuessChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleGuessSubmit = () => {
    const correctAnswer = cards[currentIndex].answer.toLowerCase();
    if (userGuess.toLowerCase() === correctAnswer) {
      setGuessStatus('correct');
      setShowAnswer(true);
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
    } else {
      setGuessStatus('incorrect');
      setCurrentStreak(0);
    }
  };

  const handleRevealAnswer = () => {
    setShowAnswer(true);
    setCurrentStreak(0);
    setGuessStatus('');
  };

  const resetCardState = () => {
    setShowAnswer(false);
    setUserGuess('');
    setGuessStatus('');
  };

  return (
    <div className="app-container">
      <div className="card-set-info">
        <h1>What Country Is This?</h1>
        <p>
          Test your knowledge of world flags! Type your guess and hit 'Submit' to see if you are correct.
          Use 'Reveal' button if you are struggling.
        </p>
        <p>Total Cards: {cards.length}</p>
        <div className="continent-legend">
          <span className="legend-item red">Asia</span>
          <span className="legend-item green">South America</span>
          <span className="legend-item blue">North America</span>
          <span className="legend-item orange">Europe</span>
          <span className="legend-item purple">Oceania</span>
          <span className="legend-item yellow">Africa</span>
        </div>
      </div>

      <StreakCounter currentStreak={currentStreak} longestStreak={longestStreak} />

      <Flashcard
        card={cards[currentIndex]}
        showAnswer={showAnswer}
        guessStatus={guessStatus}
      />

      {!showAnswer && (
        <GuessInput
          guess={userGuess}
          onGuessChange={handleGuessChange}
          onGuessSubmit={handleGuessSubmit}
          onReveal={handleRevealAnswer}
        />
      )}

      <div className="navigation-buttons">
        <button
          onClick={handlePreviousCard}
          disabled={currentIndex === 0}
          className="nav-button"
        >
          Previous
        </button>
        <button onClick={handleShuffle} className="shuffle-button">
          Shuffle
        </button>
        <button
          onClick={handleNextCard}
          disabled={currentIndex === cards.length - 1}
          className="nav-button"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
