/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Header from "./components/Header";
import LanguagesSection from "./components/LanguagesSection";
import Letters from "./components/Letters";
import RandomWordSection from "./components/RandomWordSection";
import { getRandomWord, word } from "./constants";
import { alphabet } from "./constants";
import GameState from "./components/GameState";
import NewGameBtn from "./components/NewGameBtn";
import Notice from "./components/Notice";
import { languagesBlocksInfo } from "./constants";

const App = () => {
  const [randomWord, setRandomWord] = useState(() => word?.split(""));
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempts, setAttempts] = useState(8);
  const [lostIndxs, setLostIndxs] = useState([]);
  const isWon = randomWord.every((letter) =>
    guessedLetters.includes(letter.toUpperCase())
  );
  const isLost = attempts == 0

  const handleGuess = (e) => {
    const letter = e.key.toUpperCase();

    if (alphabet.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);

      if (!randomWord.includes(e.key)) {
        setAttempts((prevAttempts) => prevAttempts - 1);

        setLostIndxs((prevIndx) => [...prevIndx, prevIndx.length]);
      }
    }
  };

  const handleClick = () => {
    setRandomWord(() => getRandomWord()?.split(""));
    setAttempts(8);
    setLostIndxs([]);
    setGuessedLetters([]);
  };

  useEffect(() => {
    if(!isWon && attempts > 0) window.addEventListener("keydown", handleGuess);

    return () => window.removeEventListener('keydown', handleGuess)
  }, [isWon, attempts]);

  return (
    <main>
      <Header />
      {isLost && (
        <GameState
          stateMessage={"Game over!"}
          stateTag={"You lose! Better start learning Assembly 😭"}
          bgColor={"#BA2A2A"}
        />
      )}
      {isWon && (
        <GameState
          stateMessage={"You win!"}
          stateTag={"Well done! 🎊"}
          bgColor={"#10A95B"}
        />
      )}
      {lostIndxs.length != 0 && !isWon && !isLost && (
        <Notice
          language={
            languagesBlocksInfo[lostIndxs[lostIndxs.length - 1]]?.language
          }
        />
      )}
      <LanguagesSection lostInd={lostIndxs} />
      <RandomWordSection
        randomWord={randomWord}
        guessedLetters={guessedLetters}
      />
      <Letters guessedLetters={guessedLetters} randomWord={randomWord} />
      {(isWon ||  isLost) && <NewGameBtn handleClick={handleClick} />}
    </main>
  );
};
export default App;
