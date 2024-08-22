import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import AdminTable from './components/AdminTable'

const Admins = () => {
  
    return (
        <div className=' flex h-screen w-full bg-[#060818] z-50 relative '>
        <Sidebar />
        <AdminTable />
      </div>
      )
  
}

export default Admins