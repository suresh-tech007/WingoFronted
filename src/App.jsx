import React from 'react';
 
import Home from './components/auth/Home';
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './components/auth/Profile';
import Recharge from './components/payments/Recharge';
import Deposithistory from './components/payments/Deposithistory';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/deposithistory" element={<Deposithistory />} />
      </Routes>
    </Router>
  );
}

export default App;
