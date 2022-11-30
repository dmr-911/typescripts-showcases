import React, { useState } from "react";
import "./App.css";
import QuestionCard from "./components/QuestionCard";
import { fetchedData, DIFFICULTY, Answers, TOTAL_QUESTION } from "./utils/api";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [data, setData] = useState<Answers[]>([]);
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<AnswerObject[]>([]);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    const data = await fetchedData(10, DIFFICULTY.MEDIUM);
    setData(data);
    setLoading(false);
    setGameOver(false);
    setScore(0);
    setAnswers([]);
    setNumber(0);
  };

  const handleAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      //check correct answer against answer
      const correct = data[number].correct_answer === answer;
      // set correct answer
      if (correct) setScore((prev) => prev + 1);
      // save answer in the array
      const answerObject = {
        question: data[number].question,
        answer,
        correct,
        correctAnswer: data[number].correct_answer,
      };
      setAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    setNumber((prev) => prev + 1);
  };

  const handleRestart = () => {
    setGameOver(true);
    setNumber(0);
    setAnswers((prev) => []);
  };

  return (
    <div className="App">
      {gameOver ? <button onClick={startQuiz}>Start</button> : null}

      {answers.length !== 0 ? (
        <button onClick={handleRestart}>Restart</button>
      ) : null}

      {!gameOver && !loading ? (
        <QuestionCard
          questionNr={number + 1}
          score={score}
          totalQuestions={TOTAL_QUESTION}
          question={data[number].question}
          answers={data[number].answers}
          userAnswer={answers ? answers[number] : undefined}
          handleAnswer={handleAnswer}
        />
      ) : null}
      {loading ? <p>Please wait ...</p> : null}
      {!gameOver &&
      !loading &&
      answers.length === number + 1 &&
      number !== TOTAL_QUESTION - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </div>
  );
}

export default App;
