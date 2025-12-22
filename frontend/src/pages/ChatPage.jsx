import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../App.css";
import "../styles/chat.css";

import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

const API_BASE_URL = "http://localhost:5000/api";

function ChatPage() {
  const navigate = useNavigate();

  // Get logged-in user
  const userId = localStorage.getItem("user_id");

  const [sessions, setSessions] = useState([]);
  const [currentSessionId, setCurrentSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (!userId) {
      navigate("/");
    } else {
      fetchSessions();
    }

  }, [navigate]);


  // Load sessions for this user
  const fetchSessions = async () => {
    try {
      const res = await axios.post(`${API_BASE_URL}/sessions`, {
        user_id: userId,
      });
      setSessions(res.data);
    } catch (error) {
      console.error("Error fetching sessions:", error);
    }
  };

  // Send message
  const handleSendMessage = async (text) => {
    if (!text || text.trim() === "") return; // block empty messages

    const newMessage = { sender: "user", text };
    setMessages((prev) => [...prev, newMessage]);
    setLoading(true);

    try {
      const payload = {
  message: text,
  session_id: currentSessionId,
  user_id: localStorage.getItem("user_id")
};


      const res = await axios.post(`${API_BASE_URL}/chat`, payload);

      setMessages(res.data.history);
      setCurrentSessionId(res.data.session_id);
      fetchSessions();
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error: Could not reach the server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Load a selected session
  const handleSelectSession = async (id) => {
    setCurrentSessionId(id);

    try {
      const res = await axios.post(`${API_BASE_URL}/sessions/load`, {
        session_id: id,
        user_id: userId,
      });

      setMessages(res.data.messages || []);
    } catch (error) {
      console.error("Error loading session:", error);
    }
  };

  // New chat
  const handleNewChat = () => {
    setCurrentSessionId(null);
    setMessages([]);
  };

  return (
    <div className="chat-page">
      <div className="app-container">
        <Sidebar
          sessions={sessions}
          onSelectSession={handleSelectSession}
          onNewChat={handleNewChat}
          activeSessionId={currentSessionId}
        />
        <ChatWindow
          messages={messages}
          onSendMessage={handleSendMessage}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default ChatPage;
