import { alphabet } from "../constants";
import LetterBlock from "./LetterBlock";

const Letters = ({ guessedLetters, randomWord, gameOver }) => {
  return (
    <div className="letters">
      {alphabet.map((letter) => (
        <LetterBlock
        gameOver={gameOver}
          key={letter}
          letter={letter}
          guessedLetters={guessedLetters}
          randomWord={randomWord}
        />
      ))}
    </div>
  );
};
export default Letters;
