import RandomLetterBlock from "./RandomLetterBlock";

const RandomWordSection = ({ randomWord, guessedLetters }) => {
  return (
    <div className="rand-section">
      {randomWord.map((letter, index) => (
        <RandomLetterBlock
          key={index}
          letter={letter}
          guessedLetters={guessedLetters}
        />
      ))}
    </div>
  );
};
export default RandomWordSection;
