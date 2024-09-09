import React, { useEffect } from 'react'
import Sidebar from './Sidebar/Sidebar'
import UsersTable from './components/UsersTable'
 

const Users = () => {

  return (
    <div className=' flex h-screen w-full overflow-y-scroll scrollbar-thin scrollbar-thumb scrollbar-track hover:scrollbar-thumb-scrollbar-thumb-hover bg-[#060818] z-50 relative'>
      <Sidebar />
      <UsersTable />

    </div>
  )
}

export default Users