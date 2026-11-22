import { useState } from 'react';

export function useTimerForm(onAddTimer) {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [title, setTitle] = useState('');

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
    e.preventDefault();
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
