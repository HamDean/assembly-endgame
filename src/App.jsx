import Header from "./components/Header";
import LanguagesSection from "./components/LanguagesSection";
import Letters from "./components/Letters";
import RandomWordSection from "./components/RandomWordSection";
import GameState from "./components/GameState";
import NewGameBtn from "./components/NewGameBtn";
import Notice from "./components/Notice";
import { languagesBlocksInfo } from "./constants";
import Confetti from "react-confetti";
import useGame from "./hooks/useGame";

const App = () => {
  const {
    isLost,
    isWon,
    lostIndxs,
    randomWord,
    guessedLetters,
    handleClick,
    handleGuess,
  } = useGame();

  return (
    <main>
      {isWon && <Confetti />}
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
        isLost={isLost}
      />
      <Letters
        handleGuess={handleGuess}
        gameOver={isLost || isWon}
        guessedLetters={guessedLetters}
        randomWord={randomWord}
      />
      {(isWon || isLost) && <NewGameBtn handleClick={handleClick} />}
    </main>
  );
};
export default App;
