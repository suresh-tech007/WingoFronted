import React, { useEffect } from 'react'
import Sidebar from './Sidebar/Sidebar'
import UsersTable from './components/UsersTable'
 

const Users = () => {

  return (
    <div className=' flex h-screen w-full bg-[#060818] z-50 relative '>
      <Sidebar />
      <UsersTable />

    </div>
  )
}

export default Users