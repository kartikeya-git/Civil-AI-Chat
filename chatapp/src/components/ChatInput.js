import React, { useState, useEffect } from 'react';
import './styles.css';
import './ChatInput.css';

const ChatInput = ({ onSendMessage, onNewChat, selectedHelpOption, isProcessing }) => {
    const [message, setMessage] = useState('');

    useEffect(() => {
      if (selectedHelpOption) {
        setMessage(selectedHelpOption);
      }
    }, [selectedHelpOption]);

    
  
    const handleSendMessage = () => {
      if (message.trim() !== '') {
        onSendMessage(message);
        setMessage('');
      }
    };
  
    const handleNewChat = () => {
      onNewChat();
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (!isProcessing) { // Allow sending only when not processing
          handleSendMessage();
        }
      }
    };
  
    return (
      <div className="chat-input">
        <button onClick={handleNewChat} className="new-chat-button">
          +
        </button>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="input-field"
        />
        <button onClick={handleSendMessage} className="send-button" disabled={isProcessing}>
          Send
        </button>
      </div>
    );
  };
  
  export default ChatInput;