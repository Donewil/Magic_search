import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (msg) => {
    if (msg.trim() === '') return;
    setMessages([...messages, { text: msg, sender: 'user' }]);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'How can I assist you with your job search?', sender: 'bot' }
      ]);
    }, 1000);
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input-area">
        <input type="text" placeholder="Type your message..." className="chat-input" />
        <button onClick={() => sendMessage('Hello')} className="chat-send-btn">Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
