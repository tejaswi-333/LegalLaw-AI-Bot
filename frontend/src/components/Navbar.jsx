import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  // Auth state
  const isLoggedIn = Boolean(localStorage.getItem("user_id"));
  const userName = "User";

  // Dropdown state
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    setOpen(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <span className="logo">⚖️ LegalLaw AI</span>
      </div>

      {/* CENTER */}
      <div className="nav-center">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        {!isLoggedIn && (
          <>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/signup" className="nav-link">
              Sign Up
            </NavLink>
          </>
        )}

        {isLoggedIn && (
          <NavLink to="/chat" className="nav-link">
            Chat
          </NavLink>
        )}
      </div>

      {/* RIGHT */}
      {isLoggedIn && (
        <div className="nav-right">
          <div className="profile" onClick={() => setOpen(!open)}>
            <div className="avatar">{userName[0]}</div>
            <span className="name">{userName}</span>
          </div>

          {open && (
            <div className="dropdown">
              <button onClick={() => navigate("/chat")}>
                Go to Chat
              </button>
              <button className="logout" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
