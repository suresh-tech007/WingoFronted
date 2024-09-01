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
import {   resultHistory } from './redux/actions/Gameaction.js';
import Commingsoon from './components/Home/Commingsoon.jsx';
import DashBoard from './components/Admin/DashBoard.jsx';
import Users from './components/Admin/Users.jsx';
import DepositReq from './components/Admin/DepositReq.jsx';
import WithdrawReq from './components/Admin/WithdrawReq.jsx';
import AdminHome from './components/Admin/AdminHome.jsx';
import Admins from './components/Admin/Admins.jsx';
import DepositUpiChange from './components/Admin/DepositUpiChange.jsx';
import { checkNewUser, walletbalance } from './redux/actions/PaymentAciton.js';
import InvitationBonus from './components/component/activity/InvitationBonus.jsx';
import InvitationRewardRules from './components/component/activity/InvitationRewardRules.jsx';
import InvitationRecord from './components/component/activity/InvitationRecord.jsx';


function App() {
 

  const {  isNewuser } = useSelector(
    (state) => state.payment
  );
  const {  user } = useSelector(
    (state) => state.user
  );
  // console.log(user)
   
  const [depositModel , setDepositModel] = useState(false)
  const dispatch = useDispatch();

  
  function getDataWithExpiry(key) {
    const itemStr = localStorage.getItem(key);

    
    if (!itemStr) {
        return null;
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

 
    if (now.getTime() > item.expiry) {
        
        localStorage.removeItem(key);
        return null;
    }

    return item.value;
}
const token = localStorage.getItem("token")

  useEffect(()=>{
    const values = getDataWithExpiry("timeredepositmodel")

  
    // console.log(token)

    if(!user && token){
      dispatch(loaduser())
    }
    setTimeout(() => {
      if(!isNewuser){
        setDepositModel(true)
      }
      
    }, values || 3000);
    
    if(user){
     
      dispatch(resultHistory(1,10))
    dispatch(checkNewUser())
    dispatch(walletbalance()) 
    }
    
     
  },[dispatch,user])

 
   
   


  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/Home" element={<ProtectedRoute component={Homepage} />} /> */}
        <Route path="/Home" element={<ProtectedRoute component={WinGo} />} />
        <Route path="/activity" element={<ProtectedRoute component={InvitationBonus} />} />
        <Route path="/activity/InvitationRewardRules" element={<ProtectedRoute component={InvitationRewardRules} />} />
        <Route path="/activity/InvitationRecord" element={<ProtectedRoute component={InvitationRecord} />} />
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

<Route    exact path="/admin/" element={<ProtectedRoute  isAdmin={"admin"}  component={AdminHome} />} />
<Route    exact path="/admin/Users" element={<ProtectedRoute isAdmin={"admin"}    component={Users} />} />
<Route    exact path="/admin/adminlist" element={<ProtectedRoute isAdmin={"admin"}    component={Admins} />} />
<Route    exact path="/admin/changedepositmethod" element={<ProtectedRoute isAdmin={"admin"}    component={DepositUpiChange} />} />
 
<Route    exact path="/admin/dashboard" element={<ProtectedRoute  isAdmin={"admin"}   component={DashBoard} />} />
<Route    exact path="/admin/users" element={<ProtectedRoute  isAdmin={"admin"}   component={Users} />} />
<Route    exact path="/admin/depositrequest" element={<ProtectedRoute isAdmin={"admin"}    component={DepositReq} />} />
<Route    exact path="/admin/withdrawrequest" element={<ProtectedRoute  isAdmin={"admin"}   component={WithdrawReq} />} />
         


      </Routes>
      {user  && <Header />}
      {/* {user && depositModel &&  <DepositModal setDepositModel={setDepositModel} deposits={null} updateDeposit={400} />} */}
      

      
     
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
