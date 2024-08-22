import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import DepositRequestTable from './components/DepositRequestTable';

const DepositReq = () => {
  return (
    <div className=' flex h-screen w-full bg-[#060818] z-50 relative '>
    <Sidebar />
    <DepositRequestTable />
  </div>
  )
}

export default DepositReq;