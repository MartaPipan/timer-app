import { useState, useEffect } from 'react';

export function useTimerForm(onAddTimer) {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (initialTimer) {
      setHours(initialTimer.hours);
      setMinutes(initialTimer.minutes);
      setSeconds(initialTimer.seconds);
      setTitle(initialTimer.title);
    } else {
      setHours('00');
      setMinutes('00');
      setSeconds('00');
      setTitle('');
    }
  }, [initialTimer]);
  

  const handleStep = (currentValue, setValue, max, step) => {
    let next = Number(currentValue) + step;

    if (next < 0) next = max;
    if (next > max) next = 0;

    if (next < 10) {
      setValue('0' + next);
    } else {
      setValue(String(next));
    }
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    
    const totalSeconds =
      Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);

    if (totalSeconds = 0) {
      alert('Please set a time greater than 0 seconds!');
      return;
    }

    if (onAddTimer) {
      onAddTimer({ hours, minutes, seconds, title });
    }
  };

  return {
    hours,
    setHours,
    minutes,
    setMinutes,
    seconds,
    setSeconds,
    title,
    setTitle,
    handleStep,
    handleSubmit,
  };
}
