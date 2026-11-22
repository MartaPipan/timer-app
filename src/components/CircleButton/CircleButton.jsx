import './CircleButton.css';

export const CircleButton = ({ functionalText, onClick, color = 'green' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`circle-btn circle-btn--${color}`}
    >
      {functionalText}
    </button>
  );
};
