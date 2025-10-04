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

const App = () => {
  const [randomWord, setRandomWord] = useState(() => word?.split(""));
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempts, setAttempts] = useState(8);
  const [lostIndxs, setLostIndxs] = useState([]);
  const isWon = randomWord.every((letter) =>
  guessedLetters.includes(letter.toUpperCase())
);

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
    setAttempts(8)
    setLostIndxs([])
    setGuessedLetters([])
  };

  useEffect(() => {
    window.addEventListener("keydown", handleGuess);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Header />
      {attempts == 0 && (
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
      <Notice />
      <LanguagesSection lostInd={lostIndxs} />
      <RandomWordSection
        randomWord={randomWord}
        guessedLetters={guessedLetters}
      />
      <Letters guessedLetters={guessedLetters} randomWord={randomWord} />
      {(isWon || attempts == 0) && <NewGameBtn handleClick={handleClick} />}
    </main>
  );
};
export default App;
