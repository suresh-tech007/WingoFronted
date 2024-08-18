import React from 'react';
import { FaChartLine, FaRegChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LuWalletCards } from "react-icons/lu";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className="h-screen hover:w-[15rem] text-nowrap bg-[#0e1726] text-white w-[4.02rem] transition-all  duration-500  shadow-2xl shadow-black overflow-hidden ">
     <div className='flex  p-2'>
     <img className='text-[0.5rem]' src="https://react.vristo.sbthemes.com/assets/images/logo.svg" alt="" />
     <div className="p-4 font-bold text-lg">RED-DOT</div>
     </div>
      <nav>
        <ul className='flex flex-col'>
          <Link to={"/admin/dashboard"} className="p-2 hover:bg-gray-700 cursor-pointer ">
            <FaChartLine className="inline  text-[#4a515c] mx-[1rem] text-[1.5rem]" />
            Dashboard
          </Link>
          <Link to={"/admin/Users"}  className="p-2 hover:bg-gray-700 cursor-pointer">
            <FaRegChartBar className="inline  mx-[1rem] text-[#4a515c]  text-[1.5rem]" />
            Users
          </Link>
          <Link to={"/admin/withdrawrequest"}  className="p-2  hover:bg-gray-700  cursor-pointer">
            <MdOutlineAccountBalanceWallet   className="inline mx-[1rem]  text-[#4a515c]    text-[1.5rem]" />
            Withdraw Request
          </Link>
          <Link to={"/admin/depositrequest"}  className="p-2 hover:bg-gray-700  cursor-pointer">
            <LuWalletCards className="inline mx-[1rem]  text-[#4a515c]  text-[1.5rem]" />
            Deposit Request
          </Link>
          {/* Add more items here */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
