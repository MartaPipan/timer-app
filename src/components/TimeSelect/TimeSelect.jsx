import downArrow from '../../assets/down-arrow.png';
import './TimeSelect.css';

export function TimeSelect({ id, value, max, onChange }) {
  const options = [];

  for (let i = 0; i <= max; i++) {
    if (i < 10) {
      options.push('0' + i);
    } else {
      options.push(String(i));
    }
  }

  return (
    <div className="time-select-wrapper">
      <select
        id={id}
        name={id}
        className="time-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <img
        src={downArrow}
        alt="v"
        className="time-select-arrow-img"
      />
    </div>
  );
}
