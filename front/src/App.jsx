import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import Home from './pages/Home';
import './App.css';
import './index.css';
import Game from './pages/Game';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/Game" element={<Game/>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;