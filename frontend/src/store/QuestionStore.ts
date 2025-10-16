import { create } from "zustand";
import type { QuestionType, AnsweredQuestionType,  SessionData } from "../types/QuestionType";


interface QuestionStore {
  questions: QuestionType[];
  loadQuestions: (questions: QuestionType[]) => void;
  resetQuestion: () => void;
}

interface AnsweredQuestionsStore {
  answeredquestions: AnsweredQuestionType[];
  saveAnsweredQuestions: (answeredquestion: AnsweredQuestionType) => void;
  resetAnsweredQuestions: () => void;
  
}
interface LoggedUserStore {
  sessionData: SessionData[];
  loadSession: (sessionData: SessionData[]) => void;
  resetSession: () => void;
}
export const useQuestionStore = create<QuestionStore>((set) => ({
  questions: [],
  loadQuestions: (questions: QuestionType[]) => set({ questions }),
  resetQuestion: () => set({ questions: [] }),
}));

export const useAnsweredQuestions = create<AnsweredQuestionsStore>((set) => ({
  answeredquestions: [],
  saveAnsweredQuestions: (answeredquestion: AnsweredQuestionType) =>
    set((state) => ({
      answeredquestions: [...state.answeredquestions, answeredquestion],
    })),

     resetAnsweredQuestions: () => set({ answeredquestions: [] }),
}));

export const useLoggedUser = create<LoggedUserStore>((set) => ({
  sessionData: [],

  loadSession: (sessionData: SessionData[]) => set({ sessionData }),

  resetSession: () => set({ sessionData: [] }),
}));