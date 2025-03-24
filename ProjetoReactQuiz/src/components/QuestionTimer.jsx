import { useEffect, useState } from "react";

export default function QuestionTime({ timeout, onTimeout }) {
  const [remainingTime, setRemaingTime] = useState(timeout);

  setTimeout(timeout, onTimeout);

  useEffect(() => {
    setTimeout(timeout, onTimeout);
  }, [timeout,onTimeout]);




  useEffect(() => {
    setInterval(() => {
      setRemaingTime((prevRemainingTime) => prevRemainingTime - 100);
    });
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
