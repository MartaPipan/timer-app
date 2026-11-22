import './ArrowButton.css';

export const ArrowButton = ({ functionalText, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="arrow-btn"
    >
      {functionalText}
    </button>
  );
};
