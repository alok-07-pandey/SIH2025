import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FindInternship from './pages/FindInternship';
import About from './pages/About';
import Eligibility from './pages/Eligibility';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import DummyDashboard from './pages/DummyDashboard';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = (userData, token) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userData', JSON.stringify(userData));
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
    setUser(null);
  };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/dummy-dashboard" />;
  };

  const AuthRoute = ({ children }) => {
    return !isAuthenticated ? children : <Navigate to="/home" />;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/dummy-dashboard" />} />
          <Route 
            path="/dummy-dashboard" 
            element={
              <AuthRoute>
                <DummyDashboard />
              </AuthRoute>
            } 
          />
          <Route 
            path="/signup" 
            element={
              <AuthRoute>
                <Signup />
              </AuthRoute>
            } 
          />
          <Route 
            path="/login" 
            element={
              <AuthRoute>
                <Login onLogin={login} />
              </AuthRoute>
            } 
          />
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <Navbar user={user} onLogout={logout} />
                <Home />
                <Footer />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/find-internship" 
            element={
              <ProtectedRoute>
                <Navbar user={user} onLogout={logout} />
                <FindInternship />
                <Footer />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/about" 
            element={
              <ProtectedRoute>
                <Navbar user={user} onLogout={logout} />
                <About />
                <Footer />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/eligibility" 
            element={
              <ProtectedRoute>
                <Navbar user={user} onLogout={logout} />
                <Eligibility />
                <Footer />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Navbar user={user} onLogout={logout} />
                <Profile user={user} setUser={setUser} />
                <Footer />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;