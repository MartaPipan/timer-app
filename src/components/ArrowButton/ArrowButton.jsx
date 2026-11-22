import './ArrowButton.css';

export const ArrowButton = ({ direction, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="arrow-btn"
    >
      {direction === 'left' ? '<' : '>'}
    </button>
  );
};

