import { CircleButton } from './components/CircleButton/CircleButton.jsx';

function App() {
  const handleStart = () => {
    alert('Натиснуто Start!');
  };

  const handleReset = () => {
    alert('Натиснуто Reset!');
  };

  return (
    <div>
      <CircleButton 
        functionalText="Start" 
        onClick={handleStart} 
      />
      
      <CircleButton 
        functionalText="Reset" 
        color="blue" 
        onClick={handleReset} 
      />
    </div>
  );
}

export default App;
