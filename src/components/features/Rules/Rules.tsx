import { Link } from "react-router";
import { motion } from "motion/react";

const Rules = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center h-full"
    >
      <div className="max-w-2xl w-full p-8">
        <p className="text-gray-100 mb-4 text-lg">
          Mastermind is a code-breaking game where the computer sets a secret
          code and the player tries to guess it within a limited number of
          turns.
        </p>

        <h2 className="text-2xl font-semibold text-gray-200 mb-3 mag">Setup</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-100 mb-6">
          <li>The code consists of 4 digits.</li>
          <li>
            Each digit is between <span className="font-semibold">0–7</span>.
          </li>
          <li>Digits may repeat.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-200 mb-3">Gameplay</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-100 mb-6">
          <li>The codebreaker makes a guess of 4 digits (0–7).</li>
          <li>
            After each guess, feedback is given:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>
                <span className="font-semibold text-yellow-300">
                  Yellow peg
                </span>{" "}
                – one digit is correct and in the right position.
              </li>
              <li>
                <span className="font-semibold text-white">White peg</span> –
                one digit is correct but in the wrong position.
              </li>
              <li>No peg – the digit is not in the secret code.</li>
            </ul>
          </li>
          <li>
            The codebreaker continues guessing until they solve the code or run
            out of turns.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-200 mb-3">Winning</h2>
        <p className="text-gray-100 mb-6">
          The codebreaker wins if they guess the secret code within the allowed
          number of turns. The codemaker wins if the codebreaker fails.
        </p>
        <div className="bg-indigo-50 border-l-4 border-indigo-900 text-gray-800 p-2 text-xs  rounded">
          <p>
            Example: Secret code is{" "}
            <code className="bg-gray-200 px-2 py-1 rounded">2 5 7 4</code>.
            Guess:{" "}
            <code className="bg-gray-200 px-2 py-1 rounded">2 4 6 5</code>.
            Feedback: 1 yellow peg (the first <code>2</code> is correct and in
            the right spot) and 2 white pegs (<code>4</code> and <code>5</code>
            {} are correct digits but in the wrong spots).
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            to="/"
            className="magz mt-2 text-center border rounded-full p-1 text-gray-300 cursor-pointer hover:bg-gray-100 hover:text-[#10172a] hover:scale-110 transition duration-400 w-52"
          >
            start playing
          </Link>
        </div>
      </div>
    </motion.main>
  );
};

export default Rules;
