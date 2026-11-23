import { useState } from 'react';
import { TimerForm } from './components/TimerForm/TimerForm.jsx';
import { TimerCard } from './components/TimerCard/TimerCard.jsx';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [timers, setTimers] = useState([]);
  const [editingTimer, setEditingTimer] = useState(null);

  const handleSaveTimer = (formData) => {
    if (editingTimer) {
      setTimers(
        timers.map((timer) =>
          timer.id === editingTimer.id
            ? { ...timer, ...formData }
            : timer
        )
      );
      setEditingTimer(null);
    } else {
      const timerWithId = {
        id: Date.now(),
        hours: formData.hours,
        minutes: formData.minutes,
        seconds: formData.seconds,
        title: formData.title,
      };
      setTimers([...timers, timerWithId]);
    }

    setIsFormOpen(false);
  };

  // Оновлюємо тільки назву, щоб не збивати активний відлік часу
  const handleUpdateTitleOnly = (newTitle) => {
    if (!editingTimer) return;

    setTimers(
      timers.map((timer) =>
        timer.id === editingTimer.id ? { ...timer, title: newTitle } : timer
      )
    );
    setEditingTimer(null);
    setIsFormOpen(false);
  };

  const handleEditClick = (timer) => {
    setEditingTimer(timer);
    setIsFormOpen(true);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
    setEditingTimer(null); 
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
          initialTimer={editingTimer}
          onAddTimer={handleSaveTimer}
          onUpdateTitleOnly={handleUpdateTitleOnly}
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
            onEdit={() => handleEditClick(timer)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
