import React from 'react';
import './ChatHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faLanguage, faGlobe } from '@fortawesome/free-solid-svg-icons';


const ChatHeader = ({ darkMode, language, onToggleDarkMode, onToggleLanguage, onOpenHelpPopup }) => {
  return (
    <div className="chat-header">
      <h1 className="chat-title">Civil GPT</h1>
      <button className={`language-button ${language ? 'language-active' : ''}`} onClick={onToggleLanguage}>
        <FontAwesomeIcon icon={language ? faGlobe : faLanguage} />
        <span className="language-text">{language ? 'English' : 'Hindi'}</span>
      </button>
      <button className={`dark-mode-button ${darkMode ? 'dark-mode-active' : ''}`} onClick={onToggleDarkMode}>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        <span className="dark-mode-text">{darkMode ? 'Light' : 'Dark'}</span>
      </button>
      <button className="header-button" onClick={onOpenHelpPopup}>
        FAQ
      </button>
    </div>
  );
};
  
  export default ChatHeader;