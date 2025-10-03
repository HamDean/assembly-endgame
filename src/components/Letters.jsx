import { alphabet } from "../constants";
import LetterBlock from "./LetterBlock";

const Letters = () => {
  return (
    <div className="letters">
      {alphabet.map((letter) => (
        <LetterBlock key={letter} letter={letter} />
      ))}
    </div>
  );
};
export default Letters;
