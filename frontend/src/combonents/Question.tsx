import { useState } from "react";
import styles from "./Question.module.css";
import { useNavigate, useParams, Outlet } from "react-router";
import type { AnsweredQuestionType, Question } from "../types/QuestionType";
import TimerCombonent from "./TimerCombonent";
import { useQuestionStore } from "../store/QuestionStore";
import { useAnsweredQuestions } from "../store/QuestionStore";
import { TrackQuestions } from "./TrackQuestions";

//import questions from "../utils/const";
//import Card from "./UI/Card";

function QuestionComponent({
  question,
  navigateHandler,
  questionnumber,
}: Question) {
  const saveAnswerToGlobalState = useAnsweredQuestions(
    (state) => state.saveAnsweredQuestions
  );
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [active, setActive] = useState(true);
  const navigate = useNavigate();
  const { examcode, section_module } = useParams<{
    examcode: string;
    section_module: string;
  }>();
  /* determine number of question */
  const numberquestions = useQuestionStore((state) => state.questions.length);
  const numberanswered = useAnsweredQuestions(
    (state) => state.answeredquestions.length
  );

  console.log("Number Questions=>", numberquestions);
  console.log("Answered Questions=>", numberanswered);
  if (!question) {
    throw new Error("Question cannot be null or undefined");
  }

  function saveAnswer() {
    if (userAnswer.length === 0) {
      setResult("⚠️ Please select an answer before saving");
      return;
    }
    setActive(false);

    try {
      const answeredQuestion: AnsweredQuestionType = {
        ...question,
        userAnswer: userAnswer,
      };

      saveAnswerToGlobalState(answeredQuestion);
      console.log(
        "We have answered " + numberanswered + " Out of " + numberquestions
      );
      navigateHandler.nextQuestion();
    } catch (error) {
      console.error("Error setting questionAnswered", error);
    }
  }

  return (
    <div className={styles.questionComponent}>
      <TimerCombonent />
      <TrackQuestions questionnumber={questionnumber + 1} />
      <form>
        <p className={styles.question}>
          Question {questionnumber + 1}: {question.questionText}
        </p>
        {result && <p className={styles.result}>{result}</p>}
        {question.choices.map((ans) => (
          <div key={ans.selection} className={styles.answers}>
            <label>
              <input
                type="radio"
                name="answer"
                value={ans.selection}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={!active}
              />
              {ans.selection}: {ans.answer}
            </label>
          </div>
        ))}
      </form>
      {numberanswered === numberquestions - 1 ? (
        <button
          type="button"
          disabled={!active}
          className={styles.button}
          onClick={() => {
            saveAnswer();
            navigate(`/Questionares/${examcode}/${section_module}/Summary`);
          }}
        >
          Finish Questionnaire
        </button>
      ) : (
        <button
          type="button"
          disabled={!active}
          className={styles.button}
          onClick={saveAnswer}
        >
          Next
        </button>
      )}
      <Outlet />
    </div>
  );
}

export default QuestionComponent;
