import React, { useState } from 'react';
import helpOptions from './helpOptions'; // Import the help options data
import './HelpPopup.css';

const HelpPopup = ({ onClose, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };  

    const handleSelect = () => {
        if (selectedOption) {
          onSelect(selectedOption); // Pass the selected text to the parent component
          setSelectedOption(null); // Reset selected option
          onClose(); // Close the popup
        }
      };
  
    return (
      <div className="help-popup">
        <div className="popup-content">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          <h2>Frequently Asked Questions</h2>
          <ul>
            {helpOptions.map((option, index) => (
              <li
                key={index}
                className={selectedOption === option ? 'selected' : ''}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          {selectedOption && (
            <button className="select-button" onClick={handleSelect}>
              Select
            </button>
          )}
        </div>
      </div>
    );
  };
  
  export default HelpPopup;