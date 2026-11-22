import { ArrowButton } from '../ArrowButton/ArrowButton.jsx';
import { TimeSelect } from '../TimeSelect/TimeSelect.jsx';
import { SquareButton } from '../SquareButton/SquareButton.jsx';
import { useTimerForm } from './useTimerForm.js';
import './TimerForm.css';

export function TimerForm({ onAddTimer, onCancel, initialTimer = null }) {
  const {
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
  } = useTimerForm(onAddTimer, initialTimer);

  return (
    <form className="timer-form" onSubmit={handleSubmit}>
      <div className="timer-form-header">
        <h2>Add Timer</h2>
        <button type="button" className="close-btn" onClick={onCancel}>
          ×
        </button>
      </div>

      <div className="timer-form-controls">
        <div className="time-block">
          <label>Hours</label>
          <div className="time-inputs">
            <ArrowButton functionalText="<" onClick={() => handleStep(hours, setHours, 23, -1)} />
            <TimeSelect value={hours} max={23} onChange={setHours} />
            <ArrowButton functionalText=">" onClick={() => handleStep(hours, setHours, 23, 1)} />
          </div>
        </div>

        <div className="time-block">
          <label>Minutes</label>
          <div className="time-inputs">
            <ArrowButton functionalText="<" onClick={() => handleStep(minutes, setMinutes, 59, -1)} />
            <TimeSelect value={minutes} max={59} onChange={setMinutes} />
            <ArrowButton functionalText=">" onClick={() => handleStep(minutes, setMinutes, 59, 1)} />
          </div>
        </div>

        <div className="time-block">
          <label>Seconds</label>
          <div className="time-inputs">
            <ArrowButton functionalText="<" onClick={() => handleStep(seconds, setSeconds, 59, -1)} />
            <TimeSelect value={seconds} max={59} onChange={setSeconds} />
            <ArrowButton functionalText=">" onClick={() => handleStep(seconds, setSeconds, 59, 1)} />
          </div>
        </div>
      </div>

      <div className="timer-form-title">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="timer-form-footer">
        <SquareButton functionalText="Cancel" color="white" onClick={onCancel} />
        <SquareButton functionalText="Start" color="green" onClick={handleSubmit} />
      </div>
    </form>
  );
}
