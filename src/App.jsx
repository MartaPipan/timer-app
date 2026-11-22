import { useState } from 'react';
import { CircleButton } from './components/CircleButton/CircleButton.jsx';
import { TimerForm } from './components/TimerForm/TimerForm.jsx';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [timers, setTimers] = useState([]);

  const handleAddTimer = (timerData) => {
    const newTimer = {
      id: Date.now(),
      ...timerData,
    };

    setTimers((prevTimers) => [...prevTimers, newTimer]);
    setIsFormOpen(false);
  };

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
          <div key={timer.id}>
            <h3>{timer.title || 'Timer'}</h3>
            <p style={{ fontSize: '28px', fontWeight: 'bold' }}>
              {timer.hours}:{timer.minutes}:{timer.seconds}
            </p>
            <CircleButton functionalText="Start" onClick={() => console.log('Старт таймера', timer.id)} />
            <CircleButton functionalText="Reset" color="blue" onClick={() => console.log('Скидання', timer.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
