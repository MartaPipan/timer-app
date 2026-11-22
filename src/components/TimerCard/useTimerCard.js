import { useState, useEffect } from 'react';

export function useTimerCard(hours, minutes, seconds) {
  const initialTotalSeconds =
    Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);

  const [secondsLeft, setSecondsLeft] = useState(initialTotalSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setSecondsLeft(initialTotalSeconds);
    setIsRunning(false);
  }, [initialTotalSeconds]);

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) return;

    const intervalId = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning, secondsLeft]);

  const formatTime = (totalSec) => {
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    const addZero = (n) => (n < 10 ? '0' + n : String(n));
    return `${addZero(h)}:${addZero(m)}:${addZero(s)}`;
  };

  const progressPercent =
    initialTotalSeconds > 0 ? (secondsLeft / initialTotalSeconds) * 100 : 0;

  const handleStartPause = () => {
    if (secondsLeft > 0) {
      setIsRunning((prev) => !prev);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(initialTotalSeconds);
  };

  return {
    formattedCurrent: formatTime(secondsLeft),
    formattedInitial: formatTime(initialTotalSeconds),
    progressPercent,
    isRunning,
    handleStartPause,
    handleReset,
  };
}
