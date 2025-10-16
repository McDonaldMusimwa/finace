import { useEffect, useState } from "react";
import styles from "./Question.module.css";
import type { AnsweredQuestionType } from "../types/QuestionType";
import Card from "./UI/Card";

type Props = {
  answeredquestion: AnsweredQuestionType;
  index?: number;
  questionNumber?: number; // optional, in case you want dynamic numbering
};

function QuestionReview({ answeredquestion, index = 0 ,questionNumber}: Props) {
  const [result, setResult] = useState<string>("");

  if (!answeredquestion) {
    throw new Error("Answered question cannot be null or undefined");
  }

  const { correctAnswer, userAnswer, questionText, choices, explanation } =
    answeredquestion;

  // ✅ Use effect so state update happens after render
  useEffect(() => {
    if (userAnswer === correctAnswer) {
      setResult("✅ Correct");
    } else if (userAnswer !== undefined && userAnswer !== null) {
      setResult("❌ Incorrect answer");
    } else {
      setResult("⚠️ No answer provided");
    }
  }, [userAnswer, correctAnswer]);

  return (
    <div className={styles.questionComponent}>
      <form>
        <p className={styles.question}>
          Question {questionNumber}: {questionText}
        </p>

        {choices.map((ans) => (
          <div key={ans.selection} className={styles.answers}>
            <label>
              <input
                type="radio"
                name={`answer-${index}`}
                value={ans.selection}
                checked={userAnswer === ans.selection}
                disabled
              />
              {ans.selection}: {ans.answer}
            </label>
          </div>
        ))}
      </form>

      <div className={styles.reviewsection}>
        <Card>
          <strong>Result:</strong> {result}
        </Card>
        <Card>
          <strong>Explanation:</strong> {explanation}
        </Card>
      </div>
    </div>
  );
}

export default QuestionReview;
