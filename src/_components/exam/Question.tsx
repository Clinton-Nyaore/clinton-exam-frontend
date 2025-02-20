import { useState, useEffect } from "react";
import { IQuestion } from "@/types/exam";
import Answers from "./Answers";

const Question = ({
  question,
  index,
  length,
  totalTime = 3600,
  pauseLimit = 300, // Total pause time allowed for the entire exam
}: {
  question: IQuestion;
  index: number;
  length: number;
  totalTime?: number;
  pauseLimit?: number;
}) => {
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [totalPauseTimeLeft, setTotalPauseTimeLeft] = useState(pauseLimit);
  const [isPaused, setIsPaused] = useState(false);

  // Exam Timer Effect (runs only when NOT paused)
  useEffect(() => {
    if (!isPaused && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isPaused, timeLeft]);

  // Pause Timer Effect (runs only when paused)
  useEffect(() => {
    if (isPaused && totalPauseTimeLeft > 0) {
      const pauseTimer = setInterval(() => {
        setTotalPauseTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(pauseTimer);
    } else if (isPaused && totalPauseTimeLeft === 0) {
      setIsPaused(false); // Force resume when pause time is exhausted
    }
  }, [isPaused, totalPauseTimeLeft]);

  // Toggle pause state (only if pause time is available)
  const handlePause = () => {
    if (totalPauseTimeLeft > 0) {
      setIsPaused(!isPaused);
    }
  };

  // Format time helper
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div>
      <div id="question-info" className="flex place-items-center">
        <div id="question-numbers" className="my-3 mb-6">
          <span className="text-2xl font-bold">
            Question: {index} of {length}
          </span>
        </div>
        <div
          className="ml-auto flex place-items-center space-x-3 items-center px-3"
          id="time"
        >
          <div className="font-bold">
            <p>
              Time remaining:{" "}
              <span className="text-gray-500">{formatTime(timeLeft)}</span>
            </p>
            <p>
              Pause remaining:{" "}
              <span className="text-gray-500">
                {formatTime(totalPauseTimeLeft)}
              </span>
            </p>
          </div>

          <div className=" ">
            <button
              className={`px-6 py-3.5 font-bold ${
                totalPauseTimeLeft === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : isPaused
                  ? "bg-red-400"
                  : "bg-gray-400"
              }`}
              onClick={handlePause}
              disabled={totalPauseTimeLeft === 0}
            >
              {isPaused ? "PAUSED" : "PAUSE"}
            </button>
          </div>
        </div>

        <div
          id="calculator-icon"
          className="flex justify-center items-center my-2"
        >
          <img
            className="h-16"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmUGnZyswJNYImmudNSvHEOkfbX_hK3HwzQ&s"
            alt=""
          />
        </div>
      </div>

      <div className="flex font-bold text-xl space-x-4">
        <p className="text-gray-600">{question.question_text}</p>
      </div>

      {/* Dots section */}
      <div id="dots" className="">
        <DotsSeparator count={45} />
      </div>

      <div className="ml-8 mt-2">
        <Answers answers={question.answers} question={question.question_text} />
      </div>
    </div>
  );
};

export default Question;

const DotsSeparator = ({ count }: { count: number }) => {
  return (
    <div id="dots" className="flex justify-between space-x-2 my-6 w-full">
      {Array.from({ length: count }).map((_, index) => (
        <span key={index} className="w-2 h-2 bg-gray-600 rounded-full"></span>
      ))}
    </div>
  );
};
