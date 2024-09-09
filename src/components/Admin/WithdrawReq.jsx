import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import WithdrawRequestTable from './components/WithdrawRequestTable'

const WithdrawReq = () => {

  return (
    <div className='flex h-screen w-full overflow-y-scroll scrollbar-thin scrollbar-thumb scrollbar-track hover:scrollbar-thumb-scrollbar-thumb-hover bg-[#060818] z-50 relative '>
      <Sidebar />
      <WithdrawRequestTable />
    </div>
  )
}

export default WithdrawReq