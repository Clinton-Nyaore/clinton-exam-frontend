export interface IAnswer {
  correct: boolean;
  answer: string;
}

export interface IQuestion {
  question: string;
  answers: IAnswer[];
}

export interface IExam {
  name: string;
  description: string;
  questions: IQuestion[];
}
