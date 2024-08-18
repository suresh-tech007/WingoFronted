import React, { useEffect, useState } from 'react';

import Home from './components/auth/Home';
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
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
import Settings from './components/auth/Settings.jsx';
import BeginnerGuide from './components/Service center/BeginnerGuide.jsx';
import AboutUs from './components/Service center/AboutUs.jsx';
import CustomerService from './components/Service center/CustomerService.jsx';
import Homepage from './components/Home/Homepage.jsx';
import WinGo from './components/Games/WinGo.jsx';
import Scannerpage from './components/payments/Scannerpayment.jsx';
import UsdtPayment from './components/payments/UsdtPayment.jsx';
import AddBankAccount from './components/payments/AddBankAccount.jsx';
import Loader from './components/component/Loader.jsx';
import SelectTopUp from './components/Games/Wingocomponents/SelectTopUp.jsx';
import { Flip, ToastContainer } from 'react-toastify';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { loaduser } from './redux/actions/userAction.js';
import ChangeAvatar from './components/auth/ChangeAvatar.jsx';
import ChangePassword from './components/auth/ChangePassword.jsx';
import BindMailbox from './components/auth/BlindMailbox.jsx';
import { deposithistory, getbankdetails, getUpiDetails, UserTransactionHistory, walletbalance, withdrawhistory } from './redux/actions/PaymentAciton.js';
import { gameHistory, resultHistory } from './redux/actions/Gameaction.js';
import Commingsoon from './components/Home/Commingsoon.jsx';
import Sidebar from './components/Admin/Sidebar.jsx';
import DashBoard from './components/Admin/DashBoard.jsx';


function App() {
  const {  user } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loaduser())
    // dispatch(getbankdetails());
    // dispatch(walletbalance())
    // dispatch(deposithistory())
    // dispatch(withdrawhistory())
    // dispatch(UserTransactionHistory())
    // dispatch(gameHistory())
    dispatch(resultHistory(1,10))
    // dispatch(getUpiDetails())
  },[dispatch])
   
   


  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/Home" element={<ProtectedRoute component={Homepage} />} /> */}
        <Route path="/Home" element={<ProtectedRoute component={WinGo} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
        <Route path="/settings/changeavatar" element={<ProtectedRoute component={ChangeAvatar} />} />
        <Route path="/settings/changepassword" element={<ProtectedRoute component={ChangePassword} />} />
        <Route path="/deposit" element={<ProtectedRoute component={Recharge} />} />
        <Route path="/wallet/deposit" element={<ProtectedRoute component={Recharge} />} />
        <Route path="/settings/BindEmail" element={<ProtectedRoute component={BindMailbox} />} />
        <Route path="/deposithistory"  element={<ProtectedRoute component={Deposithistory} />} />
        <Route path="/wallet" element={<ProtectedRoute component={Wallet} />} />
        <Route path="/wallet/withdraw" element={<ProtectedRoute component={Withdraw} />} />
        <Route path="/withdrawalhistory" element={<ProtectedRoute component={Withdrawhistory} />} />
        <Route path="/notifications" element={<ProtectedRoute component={Commingsoon} />} />
        <Route path="/transactionhistory" element={<ProtectedRoute component={TransitionHistory} />} />
        <Route path="/gamehistory" element={<ProtectedRoute component={GameHistory} />} />
        <Route path="/settings" element={<ProtectedRoute component={Settings} />}/>
        <Route path="/guides" element={<ProtectedRoute component={Commingsoon} />} />
        <Route path="/services" element={<ProtectedRoute component={Commingsoon} />} />
        <Route path="/aboutus" element={<ProtectedRoute component={Commingsoon} />}  />   
         <Route path="/WinGo" element={<ProtectedRoute component={WinGo} />}  /> 
        <Route path="/QRpayment" element={<ProtectedRoute component={Scannerpage} />} />
        <Route path="/Payment" element={<ProtectedRoute component={UsdtPayment} />} />
        <Route path="/wallet/Withdraw/AddBankCard" element={<ProtectedRoute component={AddBankAccount} />} />
        <Route path='/loader' element={< Loader />} />
        <Route path='/select' element={<ProtectedRoute component={SelectTopUp} />}/>
        {/* <Route    exact path="/admin/reviews" element={<ProtectedRoute isAdmin={true}  component={ProductReviews} />} />
<Route    path="*"  element={ <NotFound/>}  /> */}

<Route    exact path="/admin/sidear" element={<ProtectedRoute   component={Sidebar} />} />
<Route    exact path="/admin/dashboard" element={<ProtectedRoute   component={DashBoard} />} />
         


      </Routes>
      {user  && <Header />}
      

      
     
      <ToastContainer
     
      position="bottom-center"
        autoClose={1000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip} />
    </Router>

  );
}

export default App;
