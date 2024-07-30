import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import paytm from "../../iamges/paytm.png";
import upi from "../../iamges/upiqr.png"
import all from "../../iamges/all.png"
import add from "../../iamges/add.png"


const Withdraw = () => {
  const [way, setWay] = useState(null);
  const reloadhanlde = () => {
    navigate("/withdraw")
    console.log("reaload")
  }
  return (
    <div className="flex relative   items-center justify-center   h-full   max-h-full    bg-gray-400">

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
            <img  src="https://img.icons8.com/?size=100&id=MabKibi4OdYM&format=png&color=000000" className='w-[3rem]' alt=" paytm" />
            <span className='text-[12px] font-light'>BANK CARD</span>
          </div>
          <div className={` cursor-pointer ${way == "EWallet" ? "bg-gradient-to-r from-teal-400  to-blue-500  text-white " : "bg-[#2b3270] text-gray-400"} active:bg-blue-500     rounded-xl    flex flex-col  py-4 items-center `} onClick={() => setWay("EWallet")}>
            <img src={all} className='w-[3rem]' alt="" />
            <span className='text-[12px] font-light'>E-wallet</span>
          </div>
        </div>
        <div className={` mx-3  bg-[#2b3270] text-[#89878786]    rounded-xl    flex flex-col  py-4 items-center `}>
          <img className='w-[5rem] cursor-pointer' src={add} alt="" />
          <p>Add your back account number</p>

        </div>

        <p className='text-red-700 text-[0.7rem] font-semibold p-4' >Need to add beneficiary information to be able to withdraw money</p>

        <div
          className={` mx-3  bg-[#2b3270] text-[#89878786]      rounded-xl    flex flex-col  h-full gap-3 py-4 items-center `}
        >

          <div className=' w-[350px] h-[2.5rem] border rounded-3xl flex items-center justify-evenly px-2 '>
            <img className='w-[2rem]     ' src="https://img.icons8.com/?size=100&id=87785&format=png&color=056FEBBF" alt="" />
            <input type="text" className='input-placeholder border-l  bg-transparent focus:outline-none outline-none ml-3 pl-3 w-full  border-gray-500 text-white text-[1.1rem]  ' placeholder='Please enter the amount' />
            <img className='w-[2rem]  cursor-pointer ' src="https://img.icons8.com/?size=100&id=3062&format=png&color=8C919699" alt="" />
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

          <div className=" p-6   text-white w-96">
                <h2 className="text-lg  font-sans mb-4">Withdrawal Instructions</h2>
                <ul className="space-y-3 text-sm rounded-lg border border-[gray] p-4">
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

        <div className='h-[100px]'></div>



      </div>
    </div>
  )
}

export default Withdraw