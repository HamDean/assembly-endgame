import { useEffect, useState } from "react";
import Header from "./components/Header";
import LanguagesSection from "./components/LanguagesSection";
import Letters from "./components/Letters";
import RandomWordSection from "./components/RandomWordSection";
import { word } from "./constants";
import { alphabet } from "./constants";

const App = () => {
  const [randomWord, setRandomWord] = useState(() => word?.split(""));
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempts, setAttempts] = useState(word.length);
  const [lostIndxs, setLostIndxs] = useState([]);
  console.log(lostIndxs);

  const handleGuess = (e) => {
    setAttempts((prevAttempts) => prevAttempts - 1);
    const letter = e.key.toUpperCase();

    if (alphabet.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);

      if(!randomWord.includes(e.key)){
        setLostIndxs(prevIndx => [...prevIndx, prevIndx.length])
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleGuess);
  }, []);

  return (
    <main>
      <Header />
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
