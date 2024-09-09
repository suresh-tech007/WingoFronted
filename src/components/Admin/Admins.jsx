import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import AdminTable from './components/AdminTable'

const Admins = () => {
  
    return (
        <div className=' flex h-screen w-full overflow-y-scroll scrollbar-thin scrollbar-thumb scrollbar-track hover:scrollbar-thumb-scrollbar-thumb-hover bg-[#060818] z-50 relative '>
        <Sidebar />
        <AdminTable />
      </div>
      )
  
}

export default Admins