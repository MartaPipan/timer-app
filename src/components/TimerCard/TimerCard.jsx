import { CircleButton } from '../CircleButton/CircleButton.jsx';
import { useTimerCard } from './useTimerCard.js';
import './TimerCard.css';

export function TimerCard({ hours, minutes, seconds, title, onEdit }) {
  const {
    formattedCurrent,
    formattedInitial,
    progressPercent,
    isRunning,
    handleStartPause,
    handleReset,
  } = useTimerCard(hours, minutes, seconds);

  return (
    <div className="timer-card">
      <div className="timer-card-top">
        <div className="timer-card-time">{formattedCurrent}</div>
        <div className="timer-card-buttons">
          <CircleButton
            functionalText={isRunning ? 'Pause' : 'Start'}
            color={isRunning ? 'red' : 'green'}
            onClick={handleStartPause}
          />
          <CircleButton
            functionalText="Reset"
            color="blue"
            onClick={handleReset}
          />
        </div>
      </div>

      <div className="timer-card-info">
        <span>
          {title || 'Timer'} ({formattedInitial})
        </span>
        <button type="button" className="edit-btn" onClick={onEdit}>
          ✎ Edit
        </button>
      </div>

      <div className="timer-progress-track">
        <div
          className="timer-progress-bar"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
