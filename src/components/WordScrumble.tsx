import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dummy from "../dataChallange/scrumbles.json"

const WordScramble: React.FC = () => {
  
  const [randomWord, setRandomWord] = useState("");
  const [scrambledWord, setScrambledWord] = useState("");
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    
    // Set a random title from the data
    const randomIndex = Math.floor(Math.random() * dummy.length);
    setRandomWord(dummy[randomIndex].title);
    scrambleWord(dummy[randomIndex].title);
  }, []);

  const scrambleWord = (title: string) => {
    // Scramble the letters of the title
    const scrambled = title.split("").sort(() => Math.random() - 0.5).join("");
    setScrambledWord(scrambled);
  };

  const checkResult = () => {
    // Compare the user input with the original title
    if (userInput.toLowerCase() === randomWord.toLowerCase()) {
      setScore((prevScore) => prevScore + 1);
      // Get a new random title for the next round
      const randomIndex = Math.floor(Math.random() * dummy.length);
      setRandomWord(dummy[randomIndex].title);
      scrambleWord(dummy[randomIndex].title);
      setUserInput("");
    } else {
      alert("Wrong answer. Try again!");
    }
  };

  return (
    <div>
      <Link to={'/'} className="flex justify-center items-center w-14 text-white my-5 mx-8 gap-2">
        <img src="/src/assets/img/Back.png" alt="back" className="w-4" />
        <b>Back</b>
      </Link>
      <div className="grid justify-items-center text-white my-10 border-solid border-2 mx-4">
        <h1 className="text-3xl my-2">
          <b>Word Scramble</b>
        </h1>
        <p>Tebak kata yang diacak</p>
        <br />

        <div className="gap-10 border-1">
          <p>Score: {score}</p>
          <b className="text-2xl">Kata Yang di Acak:</b>
          <p className="my-3">{scrambledWord}</p>

          <form className="grid gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="text-black"
            />
            <button className="bg-sky-900 my-5 rounded-md" onClick={checkResult}>
              Cek Hasil
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WordScramble;
