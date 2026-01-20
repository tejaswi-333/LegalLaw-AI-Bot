# ⚖️ LegalLaw AI

An AI-powered legal reference and case retrieval system that provides accurate, context-aware legal answers using **Retrieval-Augmented Generation (RAG)** and semantic search.

---

## ✨ Features
- User authentication (Login & Signup required to access Chat page)
- Natural language legal query support
- Semantic search using vector embeddings
- Retrieval-Augmented Generation (RAG) to prevent AI hallucinations
- Session-based chat history with sidebar navigation
- Persistent storage of users and chats using SQLite
- Clean, modern chat UI built with React

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm or yarn
- Python (v3.9 or above)
- Pinecone account
- OpenAI API key

---

### Installation

#### 1. Clone the repository
```bash
git clone <your-repo-url>
cd LegalLaw-AI
```

#### 2. Frontend Setup
```bash
cd frontend
npm install
# or
yarn install
```

Start the frontend:
```bash
npm run dev
# or
yarn dev
```

Open 👉 http://localhost:5173

---

#### 3. Backend Setup
```bash
cd backend
pip install -r requirements.txt
```

Create a `.env` file:
```env
OPENAI_API_KEY=your_openai_key
PINECONE_API_KEY=your_pinecone_key
```

Run the backend server:
```bash
python app.py
```

Backend runs at 👉 http://localhost:5000

---

## 📂 Project Structure
```text
LegalLaw-AI/
├── backend/
│   ├── app.py
│   ├── chat_history.db
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ChatWindow.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── ChatPage.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js
├── data/
│   └── legal_documents.pdf
├── README.md
└── package.json
```

---

## 🧑‍💻 Usage
- **Signup**: Register using email and password
- **Login**: Authenticate to access the chat interface
- **Chat**: Ask legal questions in natural language
- **History**: View and resume previous chat sessions from the sidebar
- **Logout**: Clears session and redirects to Home page

---

## 🧠 How It Works
1. Legal documents are ingested and converted into embeddings
2. Embeddings are stored in Pinecone for semantic retrieval
3. User queries retrieve relevant legal content
4. AI generates answers strictly from retrieved context (RAG)

---

## 🛠️ Technologies Used

### Frontend
- React
- Vite
- CSS
- Axios

### Backend
- Python
- Flask
- SQLite

### AI & ML
- LangChain
- OpenAI GPT-3.5 Turbo
- HuggingFace Embeddings (all-MiniLM-L6-v2)
- Pinecone Vector Database

---

## 📚 Learning Outcomes
- Retrieval-Augmented Generation (RAG)
- Semantic search with vector databases
- Full-stack development (React + Flask)
- SQLite database handling
- Prompt engineering for legal AI
- Git & version control

---

## 📄 License
This project is developed for **academic and educational purposes only**.
