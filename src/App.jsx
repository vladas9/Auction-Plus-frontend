import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import Login from './pages/LoginPage';
import Lot from './pages/Lot';
import Private from './pages/Private';
import Profile from './pages/Profile';
import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">HomePage</Link></li>
            <li><Link to="/userpage">UserPage</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/lot">Lot</Link></li>
            <li><Link to="/private">Private</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/userpage' element={<UserPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/lot' element={<Lot />} />
          <Route path='/private' element={<Private />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
