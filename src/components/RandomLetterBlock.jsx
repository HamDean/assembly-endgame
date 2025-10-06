const RandomLetterBlock = ({ letter, guessedLetters, isLost }) => {
  const styles = {
    display: isLost || guessedLetters?.includes(letter.toUpperCase()) ? 'inline-block' : 'none',
    color: !guessedLetters?.includes(letter.toUpperCase()) ? '#EC5D49' : '#F9F4DA'
  }

  return (
    <div className="rand-block">
      <span
        style={styles}
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
