import { CircleButton } from './components/CircleButton/CircleButton.jsx';
import { SquareButton } from './components/SquareButton/SquareButton.jsx';
import { ArrowButton } from './components/ArrowButton/ArrowButton.jsx';

function App() {
  const handleStart = () => {
    alert('Натиснуто Start!');
  };

  const handleReset = () => {
    alert('Натиснуто Reset!');
  };

  return (
    <>
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
      <div>
        <ArrowButton functionalText="<" onClick={() => console.log('Менше')} />
        <ArrowButton functionalText=">" onClick={() => console.log('Більше')} />
        <SquareButton functionalText="Cancel" color="white" onClick={() => console.log('Скасувати')} />
        <SquareButton functionalText="Start" color="green" onClick={() => console.log('Старт')} />
      </div>
    </>
  );
}

export default App;
