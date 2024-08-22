import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { GrDocumentUpdate } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getAllUsers, getUserDetails } from '../../../redux/actions/userAction';
import Loading from '../../component/Loading';
import { toast } from 'react-toastify';
import UserTopUp from './UserTopUp';

 


const statusColors = {
  Admin: 'text-green-500',
  User: 'text-purple-500',
 
};

const UsersTable = () => {
  const {  users,loading,error} = useSelector((state) => state.allUsers);
  const { error:error3, message} = useSelector((state) => state.profile);
   
  const {  user,loading:laoding2,error:error2 } = useSelector((state) => state.userDetails);
   
  const dispatch = useDispatch();
  const [topup,setTopup] = useState(false)

 
  const userdetailhandler =(id)=>{
    // console.log(id)
     
    dispatch(getUserDetails(id))

    setTopup(true)

  }
  useEffect(() => {
     
    dispatch(getAllUsers());
  }, [dispatch]);
  
  
  useEffect(()=>{
   
    if(error || error2 || error3){
      toast.error(error || error2 || error3)
      dispatch(clearErrors())
      
    }
    if(message){
      console.log(message)
      toast.success(message)
      dispatch(clearErrors())
    }
    
  
  },[error,message,error2,user,error3,dispatch])
  
  return (
    <div className="bg-[#060818]   absolute right-0  w-[95%] p-6 rounded-lg">
       {topup && user !==null && <UserTopUp user={user!==null && user} setTopup={setTopup} />}
      <h2 className="text-xl font-bold text-white mb-4">Simple Table</h2>
      {loading || laoding2 && <Loading />}
     
      
      <div className="overflow-x-auto rounded-lg  ">
        <table className="w-full text-left  bg-[#121424]  text-gray-400">
          <thead className="bg-gray-800     text-gray-400">
            <tr  className=' ' >
              <th className="py-2 px-4">Id</th>
              <th className="py-2 px-4">Username</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users && users !== null && users.map((row, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-2 px-4">{row._id}</td>
                <td className="py-2 px-4">{row.Username}</td>
                <td className="py-2 px-4">{row.createdAt}</td>
                <td className={`py-2 px-4 ${statusColors[row.role]}`}>
                  {row.role}
                </td>
                <td className="py-2  px-4">
                  <button className="text-gray-400 px-2 hover:text-red-500">
                    <FaTrashAlt />
                  </button>
                  <button onClick={()=>userdetailhandler(row._id)} className="text-gray-400 px-2 hover:text-red-500">
                  <GrDocumentUpdate />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
