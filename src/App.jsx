import { CircleButton } from './components/CircleButton/CircleButton.jsx';
import { TimerForm } from './components/TimerForm/TimerForm.jsx';

function App() {
  const handleAddTimer = (timerData) => {
    console.log('Створено таймер:', timerData);
  };

  const handleCancel = () => {
    console.log('Скасовано');
  };

  return (
    <div>
      <TimerForm 
        onAddTimer={handleAddTimer} 
        onCancel={handleCancel} 
      />

      <div>
        <CircleButton functionalText="Start" onClick={() => alert('Start')} />
        <CircleButton functionalText="Reset" color="blue" onClick={() => alert('Reset')} />
      </div>
    </div>
  );
}

export default App;
