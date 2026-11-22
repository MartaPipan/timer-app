import leftChevron from '../../assets/left-chevron.png';
import rightChevron from '../../assets/right-chevron.png';
import './ArrowButton.css';

export const ArrowButton = ({ functionalText, onClick }) => {
  const isLeft = functionalText === '<';

  return (
    <button
      type="button"
      onClick={onClick}
      className="arrow-btn"
      aria-label={isLeft ? 'Decrease' : 'Increase'}
    >
      <img
        src={isLeft ? leftChevron : rightChevron}
        alt={isLeft ? '<' : '>'}
        className="arrow-icon"
      />
    </button>
  );
};
