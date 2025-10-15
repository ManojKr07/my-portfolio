import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Project from './pages/Project';
import Resume from './pages/Resume';
import './App.css'
import NavBar from './components/NavBar';


const App = () => {
  return (
   <Router>
      {/* Navigation Bar (always visible) */}
      <NavBar />

      {/* Page Routes */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
