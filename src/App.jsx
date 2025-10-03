import { useEffect, useState } from "react";
import Header from "./components/Header";
import LanguagesSection from "./components/LanguagesSection";
import Letters from "./components/Letters";
import RandomWordSection from "./components/RandomWordSection";
import { getRandomWord } from "./constants";
import { alphabet } from "./constants";

const App = () => {
  const [randomWord, setRandomWord] = useState(() => getRandomWord()?.split(""));
  const [guessedLetters, setGuessedLetters] = useState([]);

  console.log(guessedLetters);

 const handleGuess = (e) => {
  const letter = e.key.toUpperCase();
  if (alphabet.includes(letter)) {
    setGuessedLetters((prev) => [...prev, letter]);
  }
};
  useEffect(() => {
    window.addEventListener("keydown", handleGuess);
  }, []);

  return (
    <main>
      <Header />
      <LanguagesSection />
      <RandomWordSection randomWord={randomWord} guessedLetters={guessedLetters} />
      <Letters guessedLetters={guessedLetters} randomWord={randomWord} />
    </main>
  );
};
export default App;
