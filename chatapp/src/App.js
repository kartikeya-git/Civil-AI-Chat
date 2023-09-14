import React, { useState } from 'react';
import ChatContainer from './components/ChatContainer';
import ChatHeader from './components/ChatHeader';
import HelpPopup from './components/HelpPopup';
import './App.css';
//import { sendMessage, setLanguage } from './api'; // Import the utility functions


const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguageState] = useState(false); // Binary values: false or true
  const [helpPopupOpen, setHelpPopupOpen] = useState(false); // State for help popup


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = async () => {
    const newLanguage = !language;
    setLanguageState(newLanguage);

    // Update language on the backend
    const response = await fetch('/api/set_language', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ language: newLanguage }),
    });

    if (response.ok) {
      console.log('Language updated successfully');
    }
  };

  const openHelpPopup = () => {
    setHelpPopupOpen(true);
  };

  const closeHelpPopup = () => {
    setHelpPopupOpen(false);
  };

  const [selectedHelpOption, setSelectedHelpOption] = useState(null);

  const handleSelectHelpOption = (selectedOption) => {
    setSelectedHelpOption(selectedOption);
    closeHelpPopup();
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <ChatHeader
        darkMode={darkMode}
        language={language}
        onToggleDarkMode={toggleDarkMode}
        onToggleLanguage={toggleLanguage}
        onOpenHelpPopup={openHelpPopup} // Add this prop
      />
      <ChatContainer language={language} selectedHelpOption={selectedHelpOption} />
      {helpPopupOpen && (
        <HelpPopup onClose={closeHelpPopup} onSelect={handleSelectHelpOption} />
      )}
    </div>
  );
};

export default App;
