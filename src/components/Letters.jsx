import { alphabet } from "../constants";
import LetterBlock from "./LetterBlock";

const Letters = ({ guessedLetters, randomWord }) => {
  return (
    <div className="letters">
      {alphabet.map((letter) => (
        <LetterBlock
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
