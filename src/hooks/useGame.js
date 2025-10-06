/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { word, alphabet, getRandomWord } from "../constants";

export default function useGame() {
  const [randomWord, setRandomWord] = useState(() => word?.split(""));
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempts, setAttempts] = useState(8);
  const [lostIndxs, setLostIndxs] = useState([]);
  const isWon = randomWord?.every((letter) =>
    guessedLetters.includes(letter.toUpperCase())
  );
  const isLost = attempts == 0;

  const handleGuess = (letter) => {
    letter = letter.toUpperCase();

    if (!alphabet.includes(letter) || isWon || isLost) return;

    setGuessedLetters((prev) => {
      if (prev.includes(letter)) return prev; // avoid duplicates
      return [...prev, letter];
    });

    if (!randomWord.includes(letter.toLowerCase())) {
      setAttempts((prev) => prev - 1);
      setLostIndxs((prev) => [...prev, prev.length]);
    }
  };

  const handleClick = () => {
    setRandomWord(() => getRandomWord()?.split(""));
    setAttempts(8);
    setLostIndxs([]);
    setGuessedLetters([]);
  };

  useEffect(() => {
    const onKeyDown = (e) => handleGuess(e.key);
    if (!isWon && attempts > 0) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isWon, attempts]);

  return {
    isWon,
    isLost,
    lostIndxs,
    handleClick,
    randomWord,
    guessedLetters,
    handleGuess
  };
}
