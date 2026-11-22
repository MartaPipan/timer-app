import leftChevron from '../../assets/left-chevron.png';
import rightChevron from '../../assets/right-chevron.png';
import './ArrowButton.css';

export const ArrowButton = ({ functionalText, onClick }) => {
  const isLeft = functionalText === '<';
  const isRight = functionalText === '>';

  return (
    <button
      type="button"
      onClick={onClick}
      className="arrow-btn"
    >
      {isLeft && <img src={leftChevron} alt="<" className="arrow-icon" />}
      {isRight && <img src={rightChevron} alt=">" className="arrow-icon" />}
    </button>
  );
};
