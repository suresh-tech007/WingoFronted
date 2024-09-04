import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import USTD from "../../iamges/USTD.png"
import add from "../../iamges/add.png"
import upiimg from "../../iamges/upiqr.png"
import { useDispatch, useSelector } from 'react-redux';
import { checkNewUser, clearErrors, getbankdetails, walletbalance, withdrawrequestforuser } from '../../redux/actions/PaymentAciton';
import { toast } from 'react-toastify';
import Loading from '../component/Loading';

const maskAccountNumber = (number) => {

  const numberStr = String(number);
  const visibleDigits = 4;
  const maskedSection = '*'.repeat(numberStr.length - (2 * visibleDigits));
  return `${numberStr.slice(0, visibleDigits)}${maskedSection}${numberStr.slice(-visibleDigits)}`;
};
function generateTransactionId() {
  const length = 16;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let transactionId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    transactionId += characters[randomIndex];
  }

  return transactionId;
}

const Withdraw = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
   
  const { isNewuser,bankdetails, error, depositBalance,withdrawableBalance, message ,loading} = useSelector((state) => state.payment);

  const [walletbalances, setWalletbalances] = useState(null)
  const [withdrawdata, setWithdrawdata] = useState({
    way: "",
    upiId: "",
    bankdetails: "",
    amount: "",
    walletID: "",
    transationId: generateTransactionId()
  })


  const reloadhanlde = () => {
    navigate("/wallet/withdraw")

  }
  const amountHandle = (e) => {
    const { value, name } = e.target
    setWithdrawdata((prev) => ({
      ...prev,
      [name]: value

    }))
  }
  const USDTamountHandle = (e) => {

    const { value } = e.target
    setWithdrawdata((prev) => ({
      ...prev,
      amount: value * 93.5
    }))
  }


  const handlewithdrawbutton = () => {
    if(isNewuser){
      toast.error("First Add deposit amount !");
      return;
    }
   
    if (withdrawdata.bankdetails == "" && withdrawdata.way == "bankCard") {
      toast.error("Add your bank account first !");
      return;
    }
    if(withdrawdata.amount <110 || withdrawdata.amount >withdrawableBalance  ){
     return toast.error("Insufficient funds")
    }
    dispatch(withdrawrequestforuser(withdrawdata))

    setWalletbalances((prev) => prev - withdrawdata.amount)

    setTimeout(() => {
      dispatch(walletbalance
        ())
    }, 500)

  };

  const handleupiId = (e) => {
    const { value, name } = e.target
    setWithdrawdata((prev) => ({
      ...prev,
      walletID: "",
      bankdetails: "",
      [name]: value

    }))
  }
  const handleWalletId = (e) => {
    const { value, name } = e.target
    setWithdrawdata((prev) => ({
      ...prev,
      upiId: "",
      bankdetails: "",
      [name]: value

    }))
  }
  const wayhandler = (way) => {

    setWithdrawdata((prev) => ({
      ...prev,
      amount: "",
      upiId: "",
      bankdetails: "",

      way: way
    }))

  }

  useEffect(() => {
    
    dispatch(checkNewUser())
    if (error) {
      toast.error(error)
      dispatch(clearErrors())
    }
    if (message) {
      toast.success(message)
      dispatch(clearErrors())
    }
    if (bankdetails !== null && withdrawdata.way === "bankCard") {

      setWithdrawdata((prev) => ({
        ...prev,
        walletID: "",
        upiId: "",
        bankdetails: bankdetails,


      }))

    }
     
    dispatch(walletbalance())
       
    if (depositBalance !==null && withdrawableBalance !== null) {
      setWalletbalances( withdrawableBalance +  depositBalance)
    }
     
   
    dispatch(getbankdetails())

    return;
  }, [error, bankdetails,dispatch , message,depositBalance,withdrawableBalance])
  return (
    <div className="flex relative   items-center justify-center   h-full   max-h-full    bg-gray-400">
      {loading && <Loading />}

      <div className="      bg-[#22275b]   pt-[3rem]       w-[full] sm:w-[400px] lg:w-[400px]  md:w-[400px]      ">
        <div className='text-white  flex items-center fixed top-0   w-[full] sm:w-[400px] lg:w-[400px]  md:w-[400px]   justify-between px-3 h-[3rem] bg-[#2b3270]'>
          <Link to={"/wallet"}><img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=40217&format=png&color=FBFBFB" alt="" /></Link>
          <div className='flex   gap-[4rem]'>
            <h1>Withdraw</h1>
            <Link to={"/withdrawalhistory"}>Withdrawal history</Link>
          </div>
        </div>
        <div className='  ' >
          <div className='bg-gradient-to-r from-teal-400  to-blue-500     rounded-[20px] m-3 p-5 text-white flex  flex-col justify-between   '>
            <div className='flex   items-center gap-3  '>
              <img className='  h-[2rem]' src="https://img.icons8.com/?size=100&id=LxhmnBiCAvFS&format=png&color=000000" alt="" />
              <p>Available Balance </p>
            </div>
            <div className='flex  gap-2 items-center'>
              <h2 className='text-start font-bold font-sans text-[1.6rem]  '>₹  { depositBalance !==null  && walletbalances !==null && walletbalances > 0 ? walletbalances : "0.00"}</h2>
              <button onClick={reloadhanlde} ><img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=1742&format=png&color=FFFFFFCC" alt="reload" /></button>
            </div>
            <div className='flex  items-center justify-between'>
              <img className='h-[3.5rem]' src="https://img.icons8.com/?size=100&id=XvUO8tVlSEL4&format=png&color=000000" alt="" />
              <span>***</span>
            </div>
          </div>
        </div>

        <div className='     grid grid-cols-3 gap-3 p-4'>
          <div className={` ${withdrawdata.way == "bankCard" ? "bg-gradient-to-r from-teal-400  to-blue-500  text-white " : "bg-[#2b3270] text-gray-400"} active:bg-blue-500     rounded-xl    flex flex-col  py-4 items-center cursor-pointer `} onClick={() => wayhandler("bankCard")} >
            <img src="https://img.icons8.com/?size=100&id=MabKibi4OdYM&format=png&color=000000" className='w-[3rem]' alt=" paytm" />
            <span className='text-[12px] font-light'>BANK CARD</span>
          </div>
          <div className={` cursor-pointer ${withdrawdata.way == "Ewallet" ? "bg-gradient-to-r from-teal-400  to-blue-500  text-white " : "bg-[#2b3270] text-gray-400"} active:bg-blue-500     rounded-xl    flex flex-col  py-4 items-center `} onClick={() => wayhandler("Ewallet")}>
            <img src={upiimg} className='w-[3rem]' alt="" />
            <span className='text-[12px]  font-semibold'>E-wallet</span>
          </div>
          <div className={` cursor-pointer ${withdrawdata.way == "USDT" ? "bg-gradient-to-r from-teal-400  to-blue-500  text-white " : "bg-[#2b3270] text-gray-400"} active:bg-blue-500     rounded-xl    flex flex-col  py-4 items-center `} onClick={() => wayhandler("USDT")}>
            <img src={USTD} className='w-[3rem]' alt="" />
            <span className='text-[12px]  font-semibold'>USDT</span>
          </div>
        </div>
        {(withdrawdata.way !== "Ewallet") && (withdrawdata.way !== "USDT") && bankdetails !== null ? (<div className={` mx-3 mb-3  bg-[#2b3270] text-[#89878786]     rounded-xl    flex flex-col  py-4 items-center `}>
          <div className='flex flex-col'>
            <span className='text-[#ffffffd2]'>{bankdetails && bankdetails.bankName}</span>
            <span>Holder Name :<span className='text-[#ffffffd2]'> {bankdetails && bankdetails.Holder}</span> </span>
            <span>Account Number :<span className='text-[#ffffffd2]'> {maskAccountNumber(bankdetails && bankdetails.accountNumber)}</span> </span>
            <span>Mobile Number  :<span className='text-[#ffffffd2]'> {

bankdetails &&  bankdetails.phoneNumber

            }</span> </span>

          </div>
        </div>) : (withdrawdata.way === "Ewallet") ? (

          <div className='flex   items-center justify-between bg-[#2b3270] mx-4 rounded-lg'>

            <input type="text" name='upiId' value={withdrawdata.upiId || ""} onChange={(e) => handleupiId(e)} className="   font-medium text-[#61a9ff] focus:outline-none focus:bg-transparent   bg-transparent p-2 ml-2  "
              placeholder="Enter your UPI-ID " />
          </div>

        ) : (withdrawdata.way === "USDT") ? (
          <div className='flex   items-center justify-between bg-[#2b3270] mx-4 rounded-lg'>
            <input onChange={(e) => handleWalletId(e)} value={withdrawdata.walletID || ""} name="walletID" type="text" className="   font-medium text-[#61a9ff] focus:outline-none focus:bg-transparent   bg-transparent p-2 ml-2  "
              placeholder="Enter your Wallet-ID " />

          </div>) : !bankdetails  || bankdetails==null  ? 

          (<div value={withdrawdata.walletID} className={` mx-3  bg-[#2b3270] text-[#89878786]    rounded-xl    flex flex-col  py-4 items-center `}>
            <img className='w-[5rem] cursor-pointer' src={add} alt="" />
            <p>Add your back account number</p>

          </div>
          ) : ("")

        }


        <p className='text-red-700 text-[0.7rem] font-semibold p-4' >Need to add beneficiary information to be able to withdraw money</p>

        {withdrawdata.way === "USDT" ? (

          <div className=" mx-3  bg-[#2b3270] text-[#89878786]      rounded-xl    flex flex-col  h-full gap-3 py-4 items-center  p-3">
            <h2 className="text-xl mb-4">Select amount of USDT</h2>
            <div className="w-full text-[#61a9ff] mb-4">
              <div className="flex items-center bg-[#22275b] p-2 rounded">
                <img className='w-[2rem]     ' src="https://img.icons8.com/?size=100&id=87785&format=png&color=61a9ff" alt="" />
                <input
                  type="text"
                  disabled

                  value={withdrawdata.amount || ""}
                  className="w-full  font-medium text-[#61a9ff] focus:outline-none focus:bg-transparent cursor-not-allowed bg-transparent p-2 ml-2  "
                  placeholder="rupees amount"
                 

                />
              </div>
            </div>
            <div className="w-full mb-4">
              <div className="flex items-center bg-[#22275b] p-2 rounded">
                <img className='w-[2rem]' src={USTD} alt="" />
                <input
                  type="text"

                  className="w-full focus:outline-none focus:bg-[#22275b] text-[#2a88f3] bg-transparent p-2 ml-2 "
                  placeholder="Please enter UDST amount"
                  value={(withdrawdata.amount / 93.5) || ""}
                  onChange={(e) => USDTamountHandle(e)}
                />
              </div>
            </div>
            {withdrawdata.way === "USDT" && withdrawalAmount < 10 && (<p className='text-red-500 text-[0.8rem] text-start w-full '>Minimum Withdrawal Amount:  10 USDT</p>)}




            <div className="w-full mb-4 flex justify-between items-center">
              <span className="text-xs text-[#2a88f3] ">Withdrawable balance <span className='text-orange-500'>₹ {withdrawableBalance &&  withdrawableBalance > 0 ? withdrawableBalance : "0.00"}</span></span>
              <button className=" border px-5 border-[#2a88f3] text-[#2a88f3] rounded text-[0.7rem]">All</button>
            </div>

            <button onClick={handlewithdrawbutton} className="w-full p-3   bg-[#2a88f3] hover:bg-blue-500 rounded-3xl transition-all text-white font-bold">Withdraw</button>

            <div className="w-full mt-4 p-4 rounded bg-[#2b3270]">
              <p className="text-xs mb-2 text-red-500">✦ Need to bet ₹0.00 to be able to withdraw</p>
              <p className="text-xs mb-2">✦ Withdraw time <span className="text-blue-500">07:00-19:00</span></p>
              <p className="text-xs mb-2">✦ Inday Remaining Withdrawal Times3</p>
              <p className="text-xs mb-2">✦ Withdrawal amount range <span className="text-red-500"> ₹935.00-₹10,000,000.00 </span></p>
              <p className="text-xs mb-2">✦ After withdraw, you need to confirm the blockchain main network <span className="text-red-500"> 3 </span>  times before it arrives at your account.</p>
              <p className="text-xs mb-2">✦ Please confirm that the operating environment is safe to avoid information being tampered with or leaked.</p>
              <p className="text-xs mb-2">✦ Please confirm your beneficial account information before withdrawing. If your information is incorrect, our company will not be liable for the amount of loss</p>
              <p className="text-xs">✦ If your beneficial information is incorrect, please contact customer service</p>
            </div>
          </div>
        ) : (
          <div
            className={` mx-3  bg-[#2b3270] text-[#89878786]      rounded-xl    flex flex-col  h-full gap-3 py-4 items-center `}
          >

            <div className=' w-[350px] h-[2.5rem] bg-[#22275b]   flex items-center justify-evenly px-2 '>
              <img className='w-[2rem]     ' src="https://img.icons8.com/?size=100&id=87785&format=png&color=056FEBBF" alt="" />
              <input type="text" name="amount" value={withdrawdata.amount || ""} onChange={(e) => amountHandle(e)} className='input-placeholder border-l focus:!bg-[#22275b]  focus:text-[#61a9ff]  bg-[#22275b] focus:outline-none outline-none ml-3 pl-3 w-full    text-[#61a9ff] text-[1.1rem]  ' placeholder='Enter amount in rupees' />

            </div>
            {(withdrawdata.way === "bankCard" || withdrawdata.way === "Ewallet") && withdrawdata.amount < 110 && (<p className='text-red-500 text-[0.8rem] text-start w-full pl-5'>Minimum Withdrawal Amount:  ₹110</p>)}
            <div className='flex flex-col text-[0.9rem] w-full p-4 gap-2'>
              <div className='flex  items-center justify-between'>
                <p>Withrawable balance : </p>
                <span className='text-[#d2982c]  '>₹ {withdrawableBalance && withdrawableBalance > 0 ?  withdrawableBalance : "0.00"}</span>
              </div>


            </div>

            <button onClick={handlewithdrawbutton} className=' bg-blue-600 hover:bg-transparent  font-semibold  w-[350px] h-[2.5rem]   rounded-3xl border border-transparent  text-white px-2 hover:border hover:border-[#8080809e] transition-all duration-300 '> Withdraw</button>

            <div className="   bg-[#2b3270] m-4  text-[gray] ">

              <ul className="space-y-3 text-sm  border rounded-lg border-[#2a88f386]  p-4">
                <li className="flex items-center">
                  <span className="text-blue-500">◆</span>
                  <span className="ml-2">Need to bet <span className="text-red-500">₹0.00</span> to be able to withdraw</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500">◆</span>
                  <span className="ml-2">Withdraw time <span className="text-blue-500">07:00AM-07:00PM</span></span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500">◆</span>
                  <span className="ml-2">In day Remaining Withdrawal Times <span className="text-red-500">3</span></span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500">◆</span>
                  <span className="ml-2">Withdrawal amount range <span className="text-red-500">₹110.00-₹10,000,000.00</span></span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500">◆</span>
                  <span className="ml-2">Please confirm your beneficial account information before withdrawing. If your information is incorrect, our company will not be liable for the amount of loss</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500">◆</span>
                  <span className="ml-2">If your beneficial information is incorrect, please contact customer service</span>
                </li>
              </ul>
            </div>

          </div>
        )}

        <div className='h-[100px]'></div>



      </div>
    </div>
  )
}

export default Withdraw;