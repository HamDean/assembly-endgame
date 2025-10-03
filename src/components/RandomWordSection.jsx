import RandomLetterBlock from "./RandomLetterBlock";

const RandomWordSection = ({ randomWord }) => {
  return (
    <div className="rand-section">
      {randomWord.map((letter, index) => (
        <RandomLetterBlock key={index} letter={letter} />
      ))}
    </div>
  );
};
export default RandomWordSection;
