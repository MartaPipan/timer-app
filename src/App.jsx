import { useState } from 'react';
import { TimerForm } from './components/TimerForm/TimerForm.jsx';
import { TimerCard } from './components/TimerCard/TimerCard.jsx';

function App() {

  const [isFormOpen, setIsFormOpen] = useState(true);

  const [timers, setTimers] = useState([]);

  const handleAddTimer = (newTimerData) => {
    const timerWithId = {
      id: Date.now(), 
      hours: newTimerData.hours,
      minutes: newTimerData.minutes,
      seconds: newTimerData.seconds,
      title: newTimerData.title,
    };

    setTimers([...timers, timerWithId]);

    setIsFormOpen(false);
  };

  // Cancel або ×
  const handleCancel = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="app">
      {!isFormOpen && (
        <button type="button" onClick={() => setIsFormOpen(true)}>
          + Add Timer
        </button>
      )}

      {isFormOpen && (
        <TimerForm
          onAddTimer={handleAddTimer}
          onCancel={handleCancel}
        />
      )}

      <div className="timers-list">
        {timers.map((timer) => (
          <TimerCard
            key={timer.id}
            hours={timer.hours}
            minutes={timer.minutes}
            seconds={timer.seconds}
            title={timer.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
