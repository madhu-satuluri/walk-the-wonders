import React, { useState } from "react";
import './Quiz.css'; // Ensure your styles are imported

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null)); // Array to track selected answers

  const handleAnswer = (index, isCorrect) => {
    if (!submitted) {
      const updatedAnswers = [...selectedAnswers];
      updatedAnswers[index] = isCorrect; // Store the selected answer
      setSelectedAnswers(updatedAnswers);

      if (isCorrect) {
        setScore(score + 1);
      }
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">Quiz Time!</h2>

      <div className="question-container">
        <p>Question 1: Who commissioned the Taj Mahal?</p>
        <button 
          onClick={() => handleAnswer(0, false)} 
          disabled={submitted || selectedAnswers[0] !== null}
        >
          Akbar
        </button>
        <button 
          onClick={() => handleAnswer(0, true)} 
          disabled={submitted || selectedAnswers[0] !== null}
        >
          Shah Jahan
        </button>
      </div>

      <div className="question-container">
        <p>Question 2: What year was the construction of the Taj Mahal commissioned?</p>
        <button 
          onClick={() => handleAnswer(1, true)} 
          disabled={submitted || selectedAnswers[1] !== null}
        >
          1632
        </button>
        <button 
          onClick={() => handleAnswer(1, false)} 
          disabled={submitted || selectedAnswers[1] !== null}
        >
          1653
        </button>
      </div>

      <div className="question-container">
        <p>Question 3: What is the primary material used in the construction of the Taj Mahal?</p>
        <button 
          onClick={() => handleAnswer(2, false)} 
          disabled={submitted || selectedAnswers[2] !== null}
        >
          Limestone
        </button>
        <button 
          onClick={() => handleAnswer(2, true)} 
          disabled={submitted || selectedAnswers[2] !== null}
        >
          Ivory-white marble
        </button>
      </div>

      <div className="question-container">
        <p>Question 4: What river is the Taj Mahal located next to?</p>
        <button 
          onClick={() => handleAnswer(3, false)} 
          disabled={submitted || selectedAnswers[3] !== null}
        >
          Ganges
        </button>
        <button 
          onClick={() => handleAnswer(3, true)} 
          disabled={submitted || selectedAnswers[3] !== null}
        >
          Yamuna
        </button>
      </div>

      <div className="question-container">
        <p>Question 5: What was the estimated cost of constructing the Taj Mahal at the time?</p>
        <button 
          onClick={() => handleAnswer(4, false)} 
          disabled={submitted || selectedAnswers[4] !== null}
        >
          20 million rupees
        </button>
        <button 
          onClick={() => handleAnswer(4, true)} 
          disabled={submitted || selectedAnswers[4] !== null}
        >
          32 million rupees
        </button>
      </div>

      <div className="question-container">
        <p>Question 6: How many hectares does the Taj Mahal complex cover?</p>
        <button 
          onClick={() => handleAnswer(5, true)} 
          disabled={submitted || selectedAnswers[5] !== null}
        >
          42 acres
        </button>
        <button 
          onClick={() => handleAnswer(5, false)} 
          disabled={submitted || selectedAnswers[5] !== null}
        >
          50 acres
        </button>
      </div>

      <div className="question-container">
        <p>Question 7: Which architectural styles does the Taj Mahal incorporate?</p>
        <button 
          onClick={() => handleAnswer(6, false)} 
          disabled={submitted || selectedAnswers[6] !== null}
        >
          Gothic and Baroque
        </button>
        <button 
          onClick={() => handleAnswer(6, true)} 
          disabled={submitted || selectedAnswers[6] !== null}
        >
          Indo-Islamic and Mughal
        </button>
      </div>

      <div className="question-container">
        <p>Question 8: How many artisans were employed for the construction project?</p>
        <button 
          onClick={() => handleAnswer(7, false)} 
          disabled={submitted || selectedAnswers[7] !== null}
        >
          10,000
        </button>
        <button 
          onClick={() => handleAnswer(7, true)} 
          disabled={submitted || selectedAnswers[7] !== null}
        >
          20,000
        </button>
      </div>

      <div className="question-container">
        <p>Question 9: Who was the court architect leading the construction of the Taj Mahal?</p>
        <button 
          onClick={() => handleAnswer(8, false)} 
          disabled={submitted || selectedAnswers[8] !== null}
        >
          Sir Edwin Lutyens
        </button>
        <button 
          onClick={() => handleAnswer(8, true)} 
          disabled={submitted || selectedAnswers[8] !== null}
        >
          Ustad Ahmad Lahauri
        </button>
      </div>

      <div className="question-container">
        <p>Question 10: In what year was the main construction of the mausoleum completed?</p>
        <button 
          onClick={() => handleAnswer(9, true)} 
          disabled={submitted || selectedAnswers[9] !== null}
        >
          1643
        </button>
        <button 
          onClick={() => handleAnswer(9, false)} 
          disabled={submitted || selectedAnswers[9] !== null}
        >
          1653
        </button>
      </div>

      <p>Score: {score}</p>

      {submitted ? (
        <p>Your total score is {score}</p>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default Quiz;
