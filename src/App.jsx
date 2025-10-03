import { useState } from "react";
import Header from "./components/Header";
import LanguagesSection from "./components/LanguagesSection";
import Letters from "./components/Letters";
import RandomWordSection from "./components/RandomWordSection";
import { getRandomWord } from "./constants";

const App = () => {
  const [randomWord, setRandomWord] = useState(() => getRandomWord().split(""));

  return (
    <main>
      <Header />
      <LanguagesSection />
      <RandomWordSection randomWord={randomWord} />
      <Letters />
    </main>
  );
};
export default App;
