import { useAnsweredQuestions } from "../../store/QuestionStore";
import QuestionReview from "../../combonents/QuestionReview";
import styles from "./ExamBaseSummaryPage.module.css";
import { useNavigate} from "react-router";


function ExamSummaryPage() {
    const navigate = useNavigate()
 
    const resetquestions = useAnsweredQuestions((state) => state.resetAnsweredQuestions);
  const answeredquestions = useAnsweredQuestions(
    (state) => state.answeredquestions
  );
  const resetAnsweredQuestions = useAnsweredQuestions(
    (state) => state.resetAnsweredQuestions
  );

  if (!answeredquestions) {
    throw new Error("Answered questions cannot be null or undefined");
  }

  let total = 0;
  for (let i = 0; i < answeredquestions.length; i++) {
    if (!answeredquestions[i]) {
      throw new Error("Answered question cannot be null or undefined");
    }
    if (
      answeredquestions[i].userAnswer === answeredquestions[i].correctAnswer
    ) {
      total += 100 / answeredquestions.length;
    }
  }
  function navigateHandler(){
    navigate('/Questionares')
    resetAnsweredQuestions()
  }
let questionnumber = 1
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.resultBox}>
        <h2 className={styles.title}>Exam Summary</h2>
        <p className={styles.marks}>
          Final Score: <span>{total.toFixed(2)}% {total >= 70 ? "🎉 Congrats" : "😞 Fail"}</span>
        </p>
      </div>

      <div className={styles.reviewList}>
        {answeredquestions.map((answeredquestion, index) => {
          if (!answeredquestion) {
            throw new Error("Answered question cannot be null or undefined");
          }
          return (
            <QuestionReview
              key={index}
              answeredquestion={answeredquestion}
           questionNumber={questionnumber++}
            />
          );
        })}
      </div>
      <button onClick={() => {resetquestions();navigateHandler()}} className={styles.navigateHandler}>Choose another Exam</button>
    </div>
  );
}

export default ExamSummaryPage;
