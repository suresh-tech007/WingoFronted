import React from 'react';
import { FaChartLine, FaRegChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LuWalletCards } from "react-icons/lu";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { LuPiggyBank } from "react-icons/lu";




const Sidebar = () => {
  return (
    <div className="h-screen  relative z-50    text-nowrap bg-[#0e1726] text-white hover:w-[16rem] w-[4.03rem] transition-all duration-500   shadow-2xl shadow-black overflow-hidden ">
     <div className='flex  p-2'>
     <img className='text-[0.5rem]  cursor-pointer' src="https://react.vristo.sbthemes.com/assets/images/logo.svg" alt="" />
     <div className="p-4 font-bold   cursor-pointer text-lg">RED-DOT</div>
     </div>
      <nav>
        <ul className='flex flex-col gap-1'>
          <Link to={"/admin/dashboard"} className="hover:text-[#7e777f] group py-2  text-[#293959fd]   mx-2 rounded-lg focus:text-[#4a515c] hover:bg-[#80808015]  focus:bg-[#80808015]  cursor-pointer ">
            <FaChartLine className="inline    group-hover:text-[#3e5fe198]   text-[#4a515c]  mx-[1rem] text-[1.5rem]" />
            Dashboard
          </Link>
          <Link to={"/admin/Users"}  className="hover:text-[#7e777f] group  py-2  text-[#264177]   mx-2 rounded-lg focus:text-[#4a515c] hover:bg-[#80808015]  focus:bg-[#80808015] cursor-pointer ">
            <FaRegChartBar className="inline group-hover:text-[#3e5fe198]   mx-[1rem] text-[#4a515c]  text-[1.5rem]" />
            Users
          </Link>
          <Link to={"/admin/withdrawrequest"} className="hover:text-[#7e777f] group  py-2  text-[#264177]   mx-2 rounded-lg focus:text-[#4a515c] hover:bg-[#80808015] focus:bg-[#80808015]  cursor-pointer ">
            <MdOutlineAccountBalanceWallet   className="inline mx-[1rem] group-hover:text-[#3e5fe198]     text-[#4a515c]    text-[1.5rem]" />
            Withdraw Request
          </Link>
          <Link to={"/admin/depositrequest"}  className="hover:text-[#7e777f] group  focus:bg-[#80808015] py-2  text-[#264177]   mx-2 rounded-lg focus:text-[#4a515c] hover:bg-[#80808015]  cursor-pointer ">
            <LuWalletCards className="inline mx-[1rem] group-hover:text-[#3e5fe198]     text-[#4a515c]  text-[1.5rem]" />
            Deposit Request
          </Link>
           
          <Link to={"/admin/adminlist"}  className="hover:text-[#7e777f] group  focus:bg-[#80808015] py-2  text-[#264177]   mx-2 rounded-lg focus:text-[#4a515c] hover:bg-[#80808015]  cursor-pointer ">
            <RiAdminLine  
            className="inline mx-[1rem] group-hover:text-[#3e5fe198]     text-[#4a515c]  text-[1.5rem]" />
            Admin List
          </Link>
          <Link to={"/admin/changedepositmethod"}  className="hover:text-[#7e777f] group  focus:bg-[#80808015] py-2  text-[#264177]   mx-2 rounded-lg focus:text-[#4a515c] hover:bg-[#80808015]  cursor-pointer ">
            < LuPiggyBank  className="inline mx-[1rem] group-hover:text-[#3e5fe198]     text-[#4a515c]  text-[1.5rem]" />
            Deposit method
          </Link>
           
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
