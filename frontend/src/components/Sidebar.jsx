import { useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar({ sessions, onSelectSession, onNewChat, activeSessionId }) {
  const navigate = useNavigate();
  const userName = "User"; // later you can load from backend

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    navigate("/");
  };

  return (
    <div className="sidebar">
      {/* TOP BRAND */}
      <div className="sidebar-header">
        <h2>⚖️ LegalLaw AI</h2>
      </div>

      {/* NAVIGATION */}
      <div className="sidebar-nav">
        <button className="nav-btn" onClick={() => navigate("/")}>
          🏠 Home
        </button>

        <button className="nav-btn" onClick={onNewChat}>
          ➕ New Chat
        </button>
      </div>

      {/* CHAT HISTORY */}
      <div className="session-list">
        {sessions.map((session) => (
          <div
            key={session.id}
            className={`session-item ${
              activeSessionId === session.id ? "active" : ""
            }`}
            onClick={() => onSelectSession(session.id)}
          >
            {session.title}
          </div>
        ))}
      </div>

      {/* PROFILE + LOGOUT */}
      <div className="sidebar-footer">
        <div className="profile">
          <div className="avatar">{userName[0]}</div>
          <span>{userName}</span>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
