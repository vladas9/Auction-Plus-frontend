// App.js
import './App.css'
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Private from './pages/Private';
import Lot from './pages/Lotpage';
import Post from './pages/PostlotPage';
import SuccessPage from "./pages/SuccessPage";
import Page404 from './pages/Page404';
import PrivateSession from "./pages/PrivateSession";
import Admin from "./pages/AdminHomePage";
import AdminAuth from "./pages/Adminauth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/postlot" element={<Post />} />
        <Route path="/private-session" element={<Private />} />
        <Route path="/private-session/:id" element={<PrivateSession />} />
        <Route path="/lot/:id" element={<Lot />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/admin" element={isAdminAuthenticated ? <Admin /> : <Navigate to="/admin/auth" />}/>
        <Route path="/admin/auth" element={<AdminAuth setIsAdminAuthenticated={setIsAdminAuthenticated} />} />
      </Routes>
    </Router>
  );
}

export default App;
