/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Header from "./components/Header";
import LanguagesSection from "./components/LanguagesSection";
import Letters from "./components/Letters";
import RandomWordSection from "./components/RandomWordSection";
import { word } from "./constants";
import { alphabet } from "./constants";
import GameState from "./components/GameState";

const App = () => {
  const [randomWord, setRandomWord] = useState(() => word?.split(""));
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempts, setAttempts] = useState(8);
  const [lostIndxs, setLostIndxs] = useState([]);
  let gameWon = guessedLetters.join('').toLowerCase() == randomWord.join('')
  console.log(randomWord.join(''))
  console.log(guessedLetters.join('').toLocaleLowerCase())
  console.log(gameWon)

  if (attempts == 0) {
    console.log("Attempts up");
  }

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

  useEffect(() => {
    window.addEventListener("keydown", handleGuess);
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
      {gameWon  && (
        <GameState
          stateMessage={"You win!"}
          stateTag={"Well done! 🎊"}
          bgColor={"#10A95B"}
        />
      )}
      <LanguagesSection lostInd={lostIndxs} />
      <RandomWordSection
        randomWord={randomWord}
        guessedLetters={guessedLetters}
      />
      <Letters guessedLetters={guessedLetters} randomWord={randomWord} />
    </main>
  );
};
export default App;
