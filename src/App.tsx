import { useState } from "react";
import {motion, AnimatePresence} from 'framer-motion'
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa'

function App() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const questions = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a front-end JavaScript framework",
    },
    {
      id: 2,
      question: "What is Angular?",
      answer: "Angular is a front-end JavaScript framework",
    },
    {
      id: 3,
      question: "What is Vue?",
      answer: "Vue is a front-end JavaScript framework",
    },
    {
      id: 4,
      question: "What is Svelte?",
      answer: "Svelte is a front-end JavaScript framework",
    },
    {
      id: 5,
      question: "What is Ember?",
      answer: "Ember is a front-end JavaScript framework",
    },
  ];

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-start">
      <div className="w-[89%] m-auto max-w-[1400px] bg-gray-300 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl mb-6 font-semibold">
          Frequently Asked Questions
        </h2>
        {questions.map((q) => (
          <div key={q.id} className="mb-4 last:mb-0">
            <button
              className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
              onClick={() =>
                setActiveQuestion(activeQuestion === q.id ? null : q.id)
              }
            >
              {q.question}
              {activeQuestion === q.id ? (
                <FaMinusCircle size={24} />
              ) : (
                <FaPlusCircle size={24} />
              )}
            </button>
            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <p className="text-lg mt-4">{q.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
