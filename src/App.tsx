import { useState } from "react";
import {motion, AnimatePresence} from "framer-motion";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

function App() {
  const [activeQuestion, setActiveQuestion] = useState(null)

  const questions = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a front end javascript framework"
    },
    {
      id: 2,
      question: "What is Angular?",
      answer: "Angular is a front end javascript framework"
    },
    {
      id: 3,
      question: "What is Vue?",
      answer: "Vue is a front end javascript framework"
    },
    {
      id: 4,
      question: "What is Svelte?",
      answer: "Svelte is a front end javascript framework"
    },
    {
      id: 5,
      question: "What is Ember?",
      answer: "Ember is a front end javascript framework"
    }

  ];
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-start">
      <div className="w-[89%] m-auto max-w-[1400px] bg-gray-300 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl mb-6 font-semibold">
          Frequently Asked Questions
        </h2>
        {
          questions.map((q) => (
            <div key={q.id} className="mb-4 last:mb-0">
              <button className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-center items-center"></button>
            </div>
            
          ))
        }
      </div>
    </div>
  )
}

export default App
