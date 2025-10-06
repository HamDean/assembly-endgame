/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { word, alphabet, getRandomWord } from "../constants";

export default function useGame(){
 const [randomWord, setRandomWord] = useState(() => word?.split(""));
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempts, setAttempts] = useState(8);
  const [lostIndxs, setLostIndxs] = useState([]);
  const isWon = randomWord?.every((letter) =>
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

  return {
    isWon,
    isLost,
    lostIndxs,
    handleClick,
    randomWord,
    guessedLetters
  }
}