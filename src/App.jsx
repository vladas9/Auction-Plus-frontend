import './App.css';
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation  } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import Login from './pages/Login';
import Profile from './features/Profile';
import SignUp from './pages/SignUp';
import Private from './pages/Private';
import Lot from './pages/Lotpage';
import Post from './pages/PostlotPage';
import SuccessPage from "./pages/SuccessPage";
import Page404 from './pages/Page404';
import PrivateSession from "./pages/PrivateSession";
import Admin from "./pages/AdminHomePage";
import Settings from "./pages/Settings";
import Itemstable from "./pages/Itemstable";
import NotificationsPage from "./pages/NotifPage";
import AdminLotsTable from "./components/AdminComponents/AdminLotsTable";
import AdminUsersTable from "./components/AdminComponents/AdminUsersTable";
import { Link, matchPath } from 'react-router-dom';
import { BidContext } from './context/BidContext';


function App() {
  const {isAdmin}=useContext(BidContext);
  
  const location = useLocation();

  const denied = ['/login', '/signup', '/private-session', '/admin/users', '/admin/lots', '/admin', `/private-session/:id`];

  const isDeniedPath = denied.some(path => matchPath(path, location.pathname));
  
  return (
    <div className='full_container'>
      {isDeniedPath ? 
        (<div className='left_part'>
          <Link to='/' className='back_button'><span className="material-symbols-outlined">arrow_left_alt</span></Link>
        </div>) :
        (<div className='left_part'><Navbar /></div>)}
      <div className='right_part'>
        {isDeniedPath ? 
          (<></>) :
          (<Searchbar className="searchbar"/>)}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/postlot" element={<Post />} />
            <Route path="/private-session" element={<Private />} />
            <Route path="/private-session/:id" element={<PrivateSession />} />
            <Route path="/items" element={<Itemstable/>}/>
            <Route path="/lot/:id" element={<Lot />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/notif" element={<NotificationsPage />} />
            <Route path="/admin" element={isAdmin?<Admin />:<Navigate to="/" replace/>}>
              <Route path="lots" element={<AdminLotsTable />} />
              <Route path="users" element={<AdminUsersTable />} />
            </Route>
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
      </div>
    </div>
  );
  
}

export default App;
