import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import DepositRequestTable from './components/DepositRequestTable';

const DepositReq = () => {
  return (
    <div className='flex h-screen w-full overflow-y-scroll scrollbar-thin scrollbar-thumb scrollbar-track hover:scrollbar-thumb-scrollbar-thumb-hover bg-[#060818] z-50 relative'>
      <Sidebar />
      <DepositRequestTable />
    </div>
  )
}

export default DepositReq;
