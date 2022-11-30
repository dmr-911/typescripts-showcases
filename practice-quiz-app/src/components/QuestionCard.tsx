import React from "react";
import { AnswerObject } from "../App";
import { Answers } from "../utils/api";
import "./styles.css";
export type QuestionCardTypes = {
  totalQuestions: number;
  question: string;
  score: number;
  questionNr: number;
  answers: string[];
  userAnswer: AnswerObject | undefined;
  handleAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const QuestionCard = ({
  questionNr,
  score,
  totalQuestions,
  question,
  answers,
  userAnswer,
  handleAnswer,
}: QuestionCardTypes) => {
  return (
    <div>
      <p>Score : {score}</p>
      <p>
        Question : {questionNr} /{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div className="answers">
        {answers.map((answer: string, i: number) => (
          <button
            key={i}
            disabled={!!userAnswer}
            value={answer}
            onClick={handleAnswer}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
