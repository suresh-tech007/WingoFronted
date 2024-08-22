import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import WithdrawRequestTable from './components/WithdrawRequestTable'

const WithdrawReq = () => {

  return (
    <div className=' flex h-screen w-full bg-[#060818] z-50 relative '>
      <Sidebar />
      <WithdrawRequestTable />
    </div>
  )
}

export default WithdrawReq