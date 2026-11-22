import './RectButton.css';

export const RectButton = ({ functionalText, onClick, color = 'white' }) => {
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
