import { alphabet } from "../constants";
import LetterBlock from "./LetterBlock";

const Letters = ({ guessedLetters, randomWord, gameOver, handleGuess }) => {
  return (
    <div className="letters">
      {alphabet.map((letter) => (
        <LetterBlock
        gameOver={gameOver}
          key={letter}
          letter={letter}
          guessedLetters={guessedLetters}
          randomWord={randomWord}
          handleGuess={handleGuess}
        />
      ))}
    </div>
  );
};
export default Letters;
