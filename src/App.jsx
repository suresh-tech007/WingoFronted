import React from 'react';
 
import Home from './components/auth/Home';
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './components/auth/Profile';
import Recharge from './components/payments/Recharge';
import Deposithistory from './components/payments/Deposithistory';
import Wallet from './components/payments/Wallet.jsx';
import Withdrawhistory from './components/payments/Withdrawhistory.jsx';
import Withdraw from './components/payments/Withdraw.jsx';
import Header from './components/Home/Header.jsx';
import Notifications from './components/component/Notifications.jsx';
import TransitionHistory from './components/payments/TransitionHistory.jsx';
import GameHistory from './components/component/GameHistory.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/deposit" element={<Recharge />} />
        <Route path="/deposithistory" element={<Deposithistory />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/withdrawalhistory" element={<Withdrawhistory />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/transactionhistory" element={<TransitionHistory />} />
        <Route path="/gamehistory" element={<GameHistory />} />

       
      </Routes>
      <Header/>
    </Router>
    
  );
}

export default App;
