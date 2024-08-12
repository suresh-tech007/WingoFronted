import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import USTD from "../../iamges/USTD.png"
import add from "../../iamges/add.png"
import Loader from '../component/Loader';


const Withdraw = () => {
  const navigate = useNavigate();
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [loading,setLoading] = useState(false);
  const [udstAmount, setUdstAmount] = useState('');

  const [way, setWay] = useState("");
  const reloadhanlde = () => {
    navigate("/withdraw")
    console.log("reaload")
  }
  const addbankaccount = () => {
    navigate("AddBankCard");

  }
  const handlewithdrawbutton = ()=>{
    console.log(withdrawalAmount)
  }
   
  return (
    <div className="flex relative   items-center justify-center   h-full   max-h-full    bg-gray-400">
      {loading && <Loader />}

      <div className="      bg-[#22275b]   pt-[3rem]      md:w-[400px] w-screen      ">
        <div className='text-white  flex items-center fixed top-0   w-[400px] justify-between px-3 h-[3rem] bg-[#2b3270]'>
          <Link to={"/wallet"}><img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=40217&format=png&color=FBFBFB" alt="" /></Link>
          <div className='flex   gap-[4rem]'>
            <h1>Withdraw</h1>
            <Link to={"/withdrawalhistory"}>Withdrawal history</Link>
          </div>
        </div>
        <div className='  ' >
          <div className='bg-gradient-to-r from-teal-400  to-blue-500   h-[20vh] rounded-[20px] m-3 p-5 text-white flex  flex-col justify-between   '>
            <div className='flex   items-center gap-3  '>
              <img className='  h-[2rem]' src="https://img.icons8.com/?size=100&id=LxhmnBiCAvFS&format=png&color=000000" alt="" />
              <p>Available Balance </p>
            </div>
            <div className='flex  gap-2 items-center'>
              <h2 className='text-start font-bold font-sans text-[1.6rem]  '>₹200.00</h2>
              <button onClick={reloadhanlde} ><img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=1742&format=png&color=FFFFFFCC" alt="reload" /></button>
            </div>
            <div className='flex  items-center justify-between'>
              <img className='h-[3.5rem]' src="https://img.icons8.com/?size=100&id=XvUO8tVlSEL4&format=png&color=000000" alt="" />
              <span>***</span>
            </div>
          </div>
        </div>

        <div className='     grid grid-cols-3 gap-3 p-4'>
          <div className={` ${way == "paytmQR" ? "bg-gradient-to-r from-teal-400  to-blue-500  text-white " : "bg-[#2b3270] text-gray-400"} active:bg-blue-500     rounded-xl    flex flex-col  py-4 items-center cursor-pointer `} onClick={() => setWay("paytmQR")} >
            <img src="https://img.icons8.com/?size=100&id=MabKibi4OdYM&format=png&color=000000" className='w-[3rem]' alt=" paytm" />
            <span className='text-[12px] font-light'>BANK CARD</span>
          </div>
          <div className={` cursor-pointer ${way == "USDT" ? "bg-gradient-to-r from-teal-400  to-blue-500  text-white " : "bg-[#2b3270] text-gray-400"} active:bg-blue-500     rounded-xl    flex flex-col  py-4 items-center `} onClick={() => setWay("USDT")}>
            <img src={USTD} className='w-[3rem]' alt="" />
            <span className='text-[12px]  font-semibold'>USDT</span>
          </div>
        </div>
        <div onClick={addbankaccount} className={` mx-3 mb-3  bg-[#2b3270] text-[#89878786]    rounded-xl    flex flex-col  py-4 items-center `}>
           account details
        </div>
        <div onClick={addbankaccount} className={` mx-3  bg-[#2b3270] text-[#89878786]    rounded-xl    flex flex-col  py-4 items-center `}>
          <img className='w-[5rem] cursor-pointer' src={add} alt="" />
          <p>Add your back account number</p>

        </div>

        <p className='text-red-700 text-[0.7rem] font-semibold p-4' >Need to add beneficiary information to be able to withdraw money</p>

        {way === "USDT" ? (

          <div className=" mx-3  bg-[#2b3270] text-[#89878786]      rounded-xl    flex flex-col  h-full gap-3 py-4 items-center  p-3">
            <h2 className="text-xl mb-4">Select amount of USDT</h2>
            <div className="w-full text-[#61a9ff] mb-4">
              <div className="flex items-center bg-[#22275b] p-2 rounded">
                <img className='w-[2rem]     ' src="https://img.icons8.com/?size=100&id=87785&format=png&color=61a9ff" alt="" />
                <input
                  type="text"
                  disabled
                  className="w-full  font-medium text-[#61a9ff] focus:outline-none focus:bg-transparent cursor-not-allowed bg-transparent p-2 ml-2  "
                  placeholder="Please enter UDST amount"
                  value={withdrawalAmount? withdrawalAmount* 93.5 : ''}
                  onChange={(e) => setUdstAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full mb-4">
              <div className="flex items-center bg-[#22275b] p-2 rounded">
                <img className='w-[2rem]' src={USTD} alt="" />
                <input
                  type="text"
                  className="w-full focus:outline-none text-[#2a88f3] bg-transparent p-2 ml-2 "
                  placeholder="Please enter withdrawal amc"
                  value={withdrawalAmount}
                  onChange={(e) => setWithdrawalAmount(e.target.value)}
                />
              </div>
            </div>



            <div className="w-full mb-4 flex justify-between items-center">
              <span className="text-xs text-[#2a88f3] ">Withdrawable balance <span className='text-orange-500'>₹0.00</span></span>
              <button className=" border px-5 border-[#2a88f3] text-[#2a88f3] rounded text-[0.7rem]">All</button>
            </div>

            <button onClick={handlewithdrawbutton} className="w-full p-3   bg-[#2a88f3] hover:bg-blue-500 rounded-3xl transition-all text-white font-bold">Withdraw</button>

            <div className="w-full mt-4 p-4 rounded bg-[#2b3270]">
              <p className="text-xs mb-2 text-red-500">✦ Need to bet ₹0.00 to be able to withdraw</p>
              <p className="text-xs mb-2">✦ Withdraw time 00:00-23:59</p>
              <p className="text-xs mb-2">✦ Inday Remaining Withdrawal Times3</p>
              <p className="text-xs mb-2">✦ Withdrawal amount range ₹935.00-₹10,000,000.00</p>
              <p className="text-xs mb-2">✦ After withdraw, you need to confirm the blockchain main network 3 times before it arrives at your account.</p>
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
              <input type="text" className='input-placeholder border-l  bg-[#22275b] focus:outline-none outline-none ml-3 pl-3 w-full    text-[#61a9ff] text-[1.1rem]  ' placeholder='Please enter the amount' />

            </div>
            <div className='flex flex-col text-[0.9rem] w-full p-4 gap-2'>
              <div className='flex  items-center justify-between'>
                <p>Withrawable balance </p>
                <span className='text-[#d2982c]  '>₹200.00</span>
              </div>
              <div className='flex  items-center justify-between'>
                <p>Withrawable amount received </p>
                <span className='text-[#d2982c]  '>₹200.00</span>
              </div>

            </div>

            <button className=' bg-blue-600 hover:bg-transparent  font-semibold  w-[350px] h-[2.5rem]   rounded-3xl border border-transparent  text-white px-2 hover:border hover:border-[#8080809e] transition-all duration-300 '> Withdraw</button>

            <div className="   bg-[#2b3270] m-4  text-[gray] ">
               
              <ul className="space-y-3 text-sm  border rounded-lg border-[#2a88f386]  p-4">
                <li className="flex items-center">
                  <span className="text-blue-500">◆</span>
                  <span className="ml-2">Need to bet <span className="text-red-500">₹0.00</span> to be able to withdraw</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500">◆</span>
                  <span className="ml-2">Withdraw time <span className="text-blue-500">00:00-23:59</span></span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500">◆</span>
                  <span className="ml-2">Inday Remaining Withdrawal Times<span className="text-red-500">3</span></span>
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

export default Withdraw