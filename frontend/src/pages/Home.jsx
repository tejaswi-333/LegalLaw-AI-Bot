import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-left">
          <h1>
            Legal Intelligence,
            <br />
            Accelerated by AI.
          </h1>

          <div className="chat-link">
            <button>Start Legal Search</button>
          </div>

          <div className="features">
            <div className="feature-card">
              <h3>🔍 Case Retrieval</h3>
              <p>Smart retrieval of professional legal cases.</p>
            </div>

            <div className="feature-card">
              <h3>✍️ AI Drafting</h3>
              <p>Automated legal document construction.</p>
            </div>

            <div className="feature-card">
              <h3>📊 Analysis</h3>
              <p>Deep precedent analysis and legal insights.</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          {/* Placeholder for scale illustration */}
          <div className="scale-icon">⚖️</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        Copyright © LegalLaw-AI. All rights reserved.
      </footer>
    </div>
  );
}
