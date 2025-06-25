import React from 'react';
import './Flashcard.css';

function Flashcard({ card, showAnswer, guessStatus }) {
  const getBorderColorClass = (continent) => {
    switch (continent) {
      case 'Asia': return 'red-border';
      case 'South America': return 'green-border';
      case 'North America': return 'blue-border';
      case 'Europe': return 'orange-border';
      case 'Oceania': return 'purple-border';
      case 'Africa': return 'yellow-border';
      default: return '';
    }
  };

  return (
    <div
      className={`flashcard-container ${getBorderColorClass(card.continent)} ${guessStatus} ${showAnswer ? 'flipped' : ''}`}
    >
      <div className="flashcard-content">
        <div className="flashcard-front">
          <img src={card.question} alt="Country Flag" className="flag-image" />
        </div>
        <div className="flashcard-back">
          {showAnswer && <p className="country-name">{card.answer}</p>}
        </div>
      </div>
    </div>
  );
}

export default Flashcard;