import React, { useState } from 'react';

const ChatWindow = ({ messages, onSendMessage, loading }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSendMessage(input);
    setInput("");
  };

  return (
    <div className="chat-window">
      <div className="messages-container">
        {messages.length === 0 && (
          <div style={{textAlign: 'center', marginTop: '20%', color: '#6c7086'}}>
            <h2>Legal Assistant AI</h2>
            <p>Ask about Indian Penal Code, Constitution, or Case Law.</p>
          </div>
        )}
        
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.sender === 'bot' && <div className="avatar">AI</div>}
            <div className="text" style={{whiteSpace: 'pre-wrap'}}>{msg.text}</div>
          </div>
        ))}
        {loading && <div className="message bot">Searching legal database...</div>}
      </div>

      <form className="input-area" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-box"
          placeholder="Type your legal query here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
        <button type="button" className="send-btn" onClick={handleSubmit} disabled={loading}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;