export interface IAnswer {
  correct: boolean;
  text: string;
  selected: boolean;
}

export interface IQuestion {
  question_text: string;
  answers: IAnswer[];
}

export interface IExam {
  name: string;
  description: string;
  timeline?: string;
  questions: IQuestion[];
  image: string;
}
