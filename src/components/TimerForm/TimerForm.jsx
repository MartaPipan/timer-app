import { ArrowButton } from '../ArrowButton/ArrowButton.jsx';
import { TimeSelect } from '../TimeSelect/TimeSelect.jsx';
import { SquareButton } from '../SquareButton/SquareButton.jsx';
import { useTimerForm } from './useTimerForm.js';
import './TimerForm.css';

export function TimerForm({
  onAddTimer,
  onCancel,
  initialTimer = null,
  onUpdateTitleOnly = null,
}) {
  const {
    hours,
    setHours,
    minutes,
    setMinutes,
    seconds,
    setSeconds,
    title,
    setTitle,
    error,
    handleStep,
    handleTitleConfirm,
    handleSubmit,
  } = useTimerForm(onAddTimer, initialTimer, onUpdateTitleOnly);

  const handleTitleKeyDown = (e) => {
    if (e.key === 'Enter' && initialTimer) {
      e.preventDefault();
      handleTitleConfirm();
    }
  };

  return (
    <form className="timer-form" onSubmit={handleSubmit}>
      <div className="timer-form-header">
        <h2>{initialTimer ? 'Edit Timer' : 'Add Timer'}</h2>
        <button type="button" className="close-btn" onClick={onCancel}>
          ×
        </button>
      </div>

      <div className="timer-form-controls">
        <div className="time-block">
          <label htmlFor="hours-select">Hours</label>
          <div className="time-inputs">
            <ArrowButton functionalText="<" onClick={() => handleStep(hours, setHours, 23, -1)} />
            <TimeSelect id="hours-select" value={hours} max={23} onChange={setHours} />
            <ArrowButton functionalText=">" onClick={() => handleStep(hours, setHours, 23, 1)} />
          </div>
        </div>

        <div className="time-block">
          <label htmlFor="minutes-select">Minutes</label>
          <div className="time-inputs">
            <ArrowButton functionalText="<" onClick={() => handleStep(minutes, setMinutes, 59, -1)} />
            <TimeSelect id="minutes-select" value={minutes} max={59} onChange={setMinutes} />
            <ArrowButton functionalText=">" onClick={() => handleStep(minutes, setMinutes, 59, 1)} />
          </div>
        </div>

        <div className="time-block">
          <label htmlFor="seconds-select">Seconds</label>
          <div className="time-inputs">
            <ArrowButton functionalText="<" onClick={() => handleStep(seconds, setSeconds, 59, -1)} />
            <TimeSelect id="seconds-select" value={seconds} max={59} onChange={setSeconds} />
            <ArrowButton functionalText=">" onClick={() => handleStep(seconds, setSeconds, 59, 1)} />
          </div>
        </div>
      </div>

      <div className="timer-form-title">
        <label htmlFor="timer-title-input">Title</label>
        <div className="title-input-row">
          <input
            id="timer-title-input"
            name="title"
            type="text"
            className={error.includes('title') ? 'input-error' : ''}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleTitleKeyDown}
          />
          {initialTimer && (
            <button
              type="button"
              className="confirm-title-btn"
              onClick={handleTitleConfirm}
              title="Save title without stopping timer"
            >
              ✓
            </button>
          )}
        </div>
      </div>

      {error && (
        <div className="form-error-banner" role="alert">
          <span className="error-icon">!</span>
          <span>{error}</span>
        </div>
      )}

      <div className="timer-form-footer">
        <SquareButton functionalText="Cancel" color="white" onClick={onCancel} />
        <SquareButton functionalText="Start" color="green" onClick={handleSubmit} />
      </div>
    </form>
  );
}
