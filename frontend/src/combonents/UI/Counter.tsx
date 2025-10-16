// components/Timer.tsx
import { useState, useEffect } from "react";

interface TimerProps {
  isActive: boolean;
  onComplete?: () => void;
}

export default function Timer({ isActive, onComplete }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes

  useEffect(() => {
    if (!isActive || timeLeft === 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        if (newTime <= 0 && onComplete) onComplete();
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, timeLeft, onComplete]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <div>
      {timeLeft === 0 ? "Time's up!" : formatTime(timeLeft)}
    </div>
  );
}
