
export interface Choice {
  selection: string;
  answer: string;
}

export interface QuestionType {
  questionText: string;
  correctAnswer: string;
  questionid: string;
  examcode: string;
  difficulty: string;
  section_module: string;
  isFree: boolean;
  isGeneral: boolean;
  choices: Choice[];
  domain: string;
  explanation: string;
}

export type NavigateHandlerType = {
  nextQuestion: () => void;
  saveAnswer: () => void;
};

