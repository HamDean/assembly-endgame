const LetterBlock = ({ letter, guessedLetters, randomWord, gameOver }) => {
  const isGuessed = guessedLetters.includes(letter);
  const isCorrect = randomWord.includes(letter.toLowerCase());

  const styles = {
    backgroundColor: isGuessed
      ? isCorrect
        ? "#10A95B" 
        : "#EC5D49" 
      : "",
    opacity: gameOver ? '0.5' : ''
  };

  return (
    <div style={styles} className="letter-block">
      {letter}
    </div>
  );
};

export default LetterBlock;
