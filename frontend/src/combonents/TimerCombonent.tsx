import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Timer.module.css";
import { CiClock2 } from "react-icons/ci";

function DraggableBox() {
  const [time, setTime] = useState(65 * 60); // 120 minutes in seconds
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    setMinutes(mins);
    setSeconds(secs);
  }, [time]);
  return (
    <div style={{ position: "absolute", width: "100vw", height: "20vh" ,padding:"1rem"}}>
      <motion.div
        drag
        dragConstraints={{ left: 100, right: 0, top: -10, bottom: 100 }}
        className={styles.timercontainer}
      >
        <CiClock2 />
        <span
          style={{
            color: "green",
            margin: "0 5px",
          }}
        >
          {minutes}
        </span>{" "}
        mins - {seconds} sec left
      </motion.div>
    </div>
  );
}

export default DraggableBox;
