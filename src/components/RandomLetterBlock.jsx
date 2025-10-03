const RandomLetterBlock = ({ letter, guessedLetters }) => {
  return (
    <div className="rand-block">
      <span
        className={`${
          guessedLetters?.includes(letter.toUpperCase()) ? "" : "not-guessed"
        }`}
      >
        {letter}
      </span>
    </div>
  );
};
export default RandomLetterBlock;
