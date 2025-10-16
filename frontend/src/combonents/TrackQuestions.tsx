import { TrackQuestionUnit } from "./UI/TrackQuestionUnit";
import styles from "./TrackQuestions.module.css";
import type { TrackQuestion } from "../types/QuestionType";

import { useQuestionStore } from "../store/QuestionStore";

export function TrackQuestions({questionnumber}:TrackQuestion) {
    const questions = useQuestionStore((state) => state.questions)
    console.log(questions)
    const questionnumbers = []
    for (let i = 1; i < questions.length+1; i++) {
        questionnumbers[i] = i
    }
    return <div className={styles.questionscontainer}>
    {questionnumbers.map(n => { return <TrackQuestionUnit questionnumber={n} currentquestion={questionnumber == n ? true:false} /> })}

    </div>
}