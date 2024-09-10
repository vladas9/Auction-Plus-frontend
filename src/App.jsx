import './App.css'
import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Private from './pages/Private'
import Lot from './pages/Lotpage'
import Post from './pages/PostlotPage'
import SuccessPage from "./pages/SuccessPage";
import Page404 from './pages/Page404'

function App() {
const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
      <Router>
          <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/postlot" element={<Post />} />
              <Route path="/private" element={<Private/>} />
              <Route path="/lot/:id" element={<Lot />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="*" element={<Page404/>}/>
          </Routes>
      </Router>
  );
}

export default App
