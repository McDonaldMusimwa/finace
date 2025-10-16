import HomeStart from '../../combonents/HomeStart';
import Home from '../Questionare';
import styles from "./Exam.module.css"
import { useState } from 'react';
import { useParams} from "react-router";
function ExamBasePage() {
const [start, setStart] = useState(false)
const { examcode } = useParams<{ examcode: string }>();

  const startQuestionaireHandler = () => {
    if (setStart === null || typeof setStart !== 'function') {
      throw new Error('Start is not a function');
    }
    try {
      setStart(true);
    } catch (error) {
      console.error('Failed to start:', error);
      throw error;
    }
  };
let examName =""; 
  switch (examcode) {
    case 'SAA-C03':
      examName = "SolutionsArchitect";
      break;
    case 'CP-C03':
      examName = "Practitioner";
      break;
    case 'AIP':
      examName = "aipractitioner";
      break;
    default:
      break;
  }


    return (
  <div className={styles.base}>
    {start ? (
      <Home />
    ) : (
      <div className={styles.examCard}>
        <h1 className={styles.examTitle}>
          {examName} Exam
        </h1>
        <p className={styles.examDescription}>
          Prepare to start your {examName} practice test. Once you begin, a timer
          will run and your answers will be saved.
        </p>
        <HomeStart
          exam={examName}
          startQuestionaire={startQuestionaireHandler}
        />
        <button
          className={styles.startBtn}
          onClick={startQuestionaireHandler}
        >
          Start Exam
        </button>
      </div>
    )}
  </div>
);

}

export default ExamBasePage;