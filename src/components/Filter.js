import React from 'react';
import './css/Filter.css';


const Filter = ({ title, options, selectedOptions, onFilterChange }) => {
  const handleCheckboxChange = event => {
    const selected = new Set(selectedOptions);
    if (event.target.checked) {
      selected.add(event.target.name);
    } else {
      selected.delete(event.target.name);
    }
    onFilterChange(Array.from(selected));
  };

  return (
    <div className="filter">
      <h4>{title}</h4>
      {options.map(option => (
        <div key={option}>
          <input
            type="checkbox"
            id={option}
            name={option}
            checked={selectedOptions.includes(option)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Filter;

