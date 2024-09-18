import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
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
import Itemstable from "./pages/Itemstable";
import AdminAuth from "./pages/Adminauth";
import NotificationsPage from "./pages/NotifPage";
import AdminLotsTable from "./components/AdminComponents/AdminLotsTable";
import AdminUsersTable from "./components/AdminComponents/AdminUsersTable";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    localStorage.getItem('isAdminAuthenticated') === 'true' 
  );

  useEffect(() => {
    localStorage.setItem('isAdminAuthenticated', isAdminAuthenticated);
  }, [isAdminAuthenticated]);

  return (
    <Router>
      <div className='full_container'>
        <div className='left_part'><Navbar/></div>
        <div className='right_part'>
            <Searchbar className="searchbar" isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <Routes>
              <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/profile" element={<Profile />} />
                <Route path="/profile/postlot" element={<Post />} />
              <Route path="/private-session" element={<Private />} />
                <Route path="/private-session/:id" element={<PrivateSession />} />
              <Route path="/items" element={<Itemstable/>}/>
              <Route path="/lot/:id" element={<Lot />} />
                <Route path="/success" element={<SuccessPage />} />
              <Route path="/notif" element={<NotificationsPage />} />
              <Route path="/admin" element={isAdminAuthenticated ? <Admin /> : <Navigate to="/admin/auth" />}>
                <Route path="lots" element={<AdminLotsTable />} />
                <Route path="users" element={<AdminUsersTable />} />
              </Route>
              <Route path="/admin/auth" element={<AdminAuth setIsAdminAuthenticated={setIsAdminAuthenticated} />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
