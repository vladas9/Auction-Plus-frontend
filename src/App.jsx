import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
          </Routes>
      </Router>
  );
}

export default App
