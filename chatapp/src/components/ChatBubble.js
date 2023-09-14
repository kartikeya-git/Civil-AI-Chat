import React from 'react';
import './styles.css';
import './ChatBubble.css';

const ChatBubble = ({ text, isUser }) => {
  return (
    <div className={`chat-bubble ${isUser ? 'user' : 'bot'}`}>
      {text}
    </div>
  );
};

export default ChatBubble;
