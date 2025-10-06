import RandomLetterBlock from "./RandomLetterBlock";

const RandomWordSection = ({ randomWord, guessedLetters, isLost }) => {
  return (
    <div className="rand-section">
      {randomWord.map((letter, index) => (
        <RandomLetterBlock
          key={index}
          letter={letter}
          guessedLetters={guessedLetters}
          isLost={isLost}
        />
      ))}
    </div>
  );
};
export default RandomWordSection;
