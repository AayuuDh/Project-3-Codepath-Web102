import React from 'react';
import './GuessInput.css';

function GuessInput({ guess, onGuessChange, onGuessSubmit, onReveal }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onGuessSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="guess-form">
      <input
        type="text"
        value={guess}
        onChange={onGuessChange}
        className="guess-input"
        placeholder="Enter country name..."
      />
      <button type="submit" className="submit-button">
        Submit
      </button>
      <button type="button" onClick={onReveal} className="reveal-button">
        Reveal
      </button>
    </form>
  );
}

export default GuessInput;