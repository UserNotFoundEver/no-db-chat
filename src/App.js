// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    const messageObject = {
      sender: 'You',
      message: newMessage.trim(),
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, messageObject]);
    setNewMessage('');
    // Simulate receiving a message
    setTimeout(() => receiveMessage(newMessage.trim()), 1500);
  };

  const receiveMessage = (message) => {
    const messageObject = {
      sender: 'Friend',
      message: `Echo: ${message}`,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prevMessages) => [...prevMessages, messageObject]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent default Enter key behavior (new line)
      sendMessage();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Parrot Chat</h2>
      </header>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index}><strong>{msg.sender}:</strong> {msg.message} <em>({msg.timestamp})</em></p>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
