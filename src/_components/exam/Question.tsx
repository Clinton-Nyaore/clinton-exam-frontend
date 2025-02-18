import { useState, useEffect } from "react";
import { IQuestion } from "@/types/exam";
import Answers from "./Answers";

const Question = ({
  question,
  index,
  length,
  totalTime = 600, // Default 10 min per exam
  pauseLimit = 3, // Max pauses allowed
}: {
  question: IQuestion;
  index: number;
  length: number;
  totalTime?: number;
  pauseLimit?: number;
}) => {
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [isPaused, setIsPaused] = useState(false);
  const [pausesRemaining, setPausesRemaining] = useState(pauseLimit);

  // Timer Effect
  useEffect(() => {
    if (!isPaused && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isPaused, timeLeft]);

  // Format time (MM:SS)
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Handle Pause
  const handlePause = () => {
    if (pausesRemaining > 0) {
      setIsPaused(!isPaused);
      if (!isPaused) {
        setPausesRemaining((prev) => prev - 1);
      }
    }
  };

  return (
    <div>
      <div id="question-info" className="flex">
        <div id="question-numbers" className="my-3 mb-6">
          <span className="text-2xl font-bold">
            Question: {index} of {length}
          </span>
        </div>
        <div className="ml-auto flex space-x-3 items-center px-3" id="time">
          <div className="font-bold">
            <p>
              Time remaining:{" "}
              <span className="text-gray-500">{formatTime(timeLeft)}</span>
            </p>
            <p>
              Pause remaining:{" "}
              <span className="text-gray-500">{pausesRemaining}</span>
            </p>
          </div>
          <div className="mx-4">
            <button
              className={`px-3 py-1.5 rounded ${
                pausesRemaining > 0
                  ? "bg-gray-300"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={handlePause}
              disabled={pausesRemaining === 0}
            >
              {isPaused ? "RESUME" : "PAUSE"}
            </button>
          </div>
        </div>
      </div>

      <div className="flex font-bold text-xl space-x-4">
        <p className="text-gray-600">{question.question_text}</p>
      </div>

      <div className="ml-8 mt-2">
        <Answers answers={question.answers} question={question.question_text} />
      </div>
    </div>
  );
};

export default Question;
