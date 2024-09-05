import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home_page';
import UserPage from './pages/user_page';
import Login from './pages/login_page';
import Lot from './pages/lot_page';
import Private from './pages/private_page';
import Profile from './pages/profile_page';
import RegisterPage from './pages/register_page';
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
