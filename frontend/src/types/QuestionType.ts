interface Choice {
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
export type Question = {
  question: QuestionType;
  navigateHandler: NavigateHandlerType;
  questionnumber: number;
};
export interface AnsweredQuestionType extends QuestionType {
userAnswer:string
}

export interface TrackQuestion{
    questionnumber:number
}

export interface SessionData {
  email: string;
  phone: string;
  id: string;
}