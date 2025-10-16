import styles from "./TrackQuestion.module.css";
import type { TrackQuestion } from "../../types/QuestionType";
interface TrackQuestionStyle extends TrackQuestion{
currentquestion:boolean
}
export function TrackQuestionUnit({questionnumber,currentquestion}:TrackQuestionStyle){
    
    return<div className={`${styles.questioncontainer} ${currentquestion ? styles.currentquestion : null}`}>
{questionnumber}
    </div>
}