import { shuffleAnswers } from "./shuffleAnswers";

export enum DIFFICULTY {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type Result = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export const TOTAL_QUESTION = 10;

export type Answers = Result & { answers: string[] };

export const fetchedData = async (amount: number, difficulty: DIFFICULTY) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  const data = await (await fetch(endpoint)).json();

  return data.results.map((result: Result) => ({
    ...result,
    answers: shuffleAnswers([
      result.correct_answer,
      ...result.incorrect_answers,
    ]),
  }));
};
