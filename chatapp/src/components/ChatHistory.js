import React, { useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';
import './ChatHistory.css';

const ChatHistory = ({ messages, typing }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="chat-history">
      {messages.map((message, index) => (
        <ChatBubble key={index} text={message.content} isUser={message.role === 'user'} />
      ))}
      {typing && (
        <div className="chat-bubble bot typing">
          <span className="typing-indicator"></span>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatHistory;
