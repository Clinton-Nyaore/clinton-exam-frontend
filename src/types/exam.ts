export interface IAnswer {
  id: number;
  is_correct: boolean;
  text: string;
  selected: boolean;
}

export interface IQuestion {
  id: number;
  question_text: string;
  answers: IAnswer[];
}

export interface IExam {
  id: number;
  name: string;
  description: string;
  timeline?: string;
  questions: IQuestion[];
  image: string;
}
