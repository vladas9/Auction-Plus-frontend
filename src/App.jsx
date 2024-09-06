import './App.css'
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Private from './pages/Private'

function App() {
const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
      <Router>
          <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/private" element={<Private/>} />
          </Routes>
      </Router>
  );
}

export default App
