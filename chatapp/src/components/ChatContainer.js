import React, { useState } from 'react';
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';
import './styles.css';
import './ChatContainer.css';

const ChatContainer = ({ language, selectedHelpOption }) => {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);

  const handleSendMessage = async (message) => {
    const userMessage = { role: 'user', content: message };
    setMessages([...messages, userMessage]);

    setTyping(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, language }),
      });

      if (!response.ok) {
        throw new Error('Backend request failed');
      }

      const responseData = await response.json();
      const aiResponse = responseData.message;

      const assistantMessage = { role: 'assistant', content: aiResponse };
      setMessages([...messages, userMessage, assistantMessage]);

      setTyping(false);
    } catch (error) {
      const aiResponse = "I'm sorry, I am currently unavailable.";
      const assistantMessage = { role: 'assistant', content: aiResponse };
      setMessages([...messages, userMessage, assistantMessage]);

      setTyping(false);
    }
  };

  const handleNewChat = async () => {
    setMessages([]); // Clear chat history on the frontend
  
    try {
      const response = await fetch('http://localhost:5000/api/clear_chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Backend request failed');
      }
    } catch (error) {
      console.log('Failed to clear chat history on the backend:', error);
    }
  };

  return (
    <div className="chat-container">
      <ChatHistory messages={messages} typing={typing} />
      <ChatInput onSendMessage={handleSendMessage} onNewChat={handleNewChat} selectedHelpOption={selectedHelpOption} isProcessing={typing} />
    </div>
  );
};

export default ChatContainer;
