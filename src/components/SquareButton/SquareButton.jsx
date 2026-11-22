import './SquareButton.css';

export const SquareButton = ({ functionalText, onClick, color = 'white' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn btn-${color}`}
    >
      {functionalText}
    </button>
  );
};
