import React from 'react'
import './App.css';
import { Routes, Route,  } from 'react-router-dom';
import StudentDashboard from './components/StudentManagement/StudentDashboard';
import TeacherDashboard from './components/TeacherManagement/TeacherDashboard';
import Sidebar from './components/Home/Sidebar';
import Navbar from './components/Home/Navbar';
import ScrollToTop from './components/Home/ScrollToTop';
import Footer from './components/Home/Footer';
import Dashboard from './components/Home/Dashboard';


function App() {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            <Navbar />
            <div className="container-fluid">
              <Routes>
              <Route path="/" element={<Dashboard />} />
                <Route path="/student" element={<StudentDashboard />} />
                <Route path="/teacher" element={<TeacherDashboard />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    
      <ScrollToTop />
    </div>
  );
}

export default App
