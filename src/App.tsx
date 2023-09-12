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
    <div className="w-screen h-screen bg-black flex justify-center items-start"></div>
  )
}

export default App
