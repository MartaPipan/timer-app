import { useState, useEffect } from 'react';

export function useTimerForm(onAddTimer, initialTimer = null, onUpdateTitleOnly = null) {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
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
    setError('');
    let next = Number(currentValue) + step;

    if (next < 0) next = max;
    if (next > max) next = 0;

    setValue(next < 10 ? '0' + next : String(next));
  };

  const handleTitleChange = (newTitle) => {
    setError('');
    setTitle(newTitle);
  };

  const handleTimeChange = (setter) => (val) => {
    setError('');
    setter(val);
  };

  const handleTitleConfirm = () => {
    const validTitle = title.trim();

    if (!validTitle) {
      setError('Please enter a timer title!');
      return;
    }

    if (onUpdateTitleOnly) {
      onUpdateTitleOnly(validTitle);
    }
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    const totalSeconds =
      Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
    const validTitle = title.trim();

    if (totalSeconds === 0) {
      setError('Please set a time greater than 0 seconds!');
      return;
    }

    if (!validTitle) {
      setError('Please enter a timer title!');
      return;
    }

    setError('');
    if (onAddTimer) {
      onAddTimer({ hours, minutes, seconds, title: validTitle });
    }
  };

  return {
    hours,
    setHours: handleTimeChange(setHours),
    minutes,
    setMinutes: handleTimeChange(setMinutes),
    seconds,
    setSeconds: handleTimeChange(setSeconds),
    title,
    setTitle: handleTitleChange,
    error,
    handleStep,
    handleTitleConfirm,
    handleSubmit,
  };
}
