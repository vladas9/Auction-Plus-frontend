import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import Login from './pages/LoginPage';
import Lot from './pages/Lot';
import Private from './pages/Private';
import Profile from './pages/Profile';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar'; 
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

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
