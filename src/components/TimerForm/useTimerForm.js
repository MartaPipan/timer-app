import { useState, useEffect } from 'react';

export function useTimerForm(onAddTimer, initialTimer = null, onUpdateTitleOnly = null) {
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

  // Підтвердження тільки назви через ✓ або Enter (таймер не зупиняється)
  const handleTitleConfirm = () => {
    const validTitle = title.trim();

    if (!validTitle) {
      alert('Please enter a timer title!');
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
      alert('Please set a time greater than 0 seconds!');
      return;
    }

    if (!validTitle) {
      alert('Please enter a timer title!');
      return;
    }

    if (onAddTimer) {
      onAddTimer({ hours, minutes, seconds, title: validTitle });
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
    handleTitleConfirm,
    handleSubmit,
  };
}
