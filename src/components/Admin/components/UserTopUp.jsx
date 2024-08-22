import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getAllUsers, updateuser } from '../../../redux/actions/userAction';
import { toast } from 'react-toastify';

const UserTopUp = ({ user, setTopup, onUpdateRole }) => {
  const {   error,message} = useSelector((state) => state.profile);
  const [selectedRole, setSelectedRole] = useState({
    role : user.role
  });
  const dispatch = useDispatch()

  const handleRoleChange = (e) => {
    setSelectedRole(()=>({
      role : e.target.value
    }));
  };

  const handleSubmit = () => {
    dispatch(updateuser(user._id, selectedRole));
    dispatch(getAllUsers())
    setTopup(false);
  };

 
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch(clearErrors())
    }
    if(message){
       
      dispatch(clearErrors())
    }
    
  },[error,dispatch])



  return (
    <div onClick={() => setTopup(false)} className="flex items-center absolute justify-center h-[90vh] w-[95%]">
      <div onClick={handleContentClick} className="w-[30vw] h-[60vh] text-white bg-[#121424] shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-4 bg-[#121424]">
          <div className="flex items-center">
            <img
              className="w-16 h-16 rounded-full object-cover"
              src={user.avatar}
              alt="User Avatar"
            />
            <div className="ml-4">
              <h2 className="text-xl font-bold text-[gray]">{user.Username}</h2>
              <p className="text-gray-600">{user.email || 'No Email Provided'}</p>
            </div>
          </div>
          <span className="text-sm font-medium text-[gray]">{user.role}</span>
        </div>
        <div className="p-4 text-white">
          <p className="py-1">
            <span className="font-semibold">Phone Number: </span> {user.phoneNum}
          </p>
          <p className="py-1">
            <span className="font-semibold">UID: </span> {user.UID}
          </p>
          <p className="py-1">
            <span className="font-semibold">Wallet ID: </span> {user.wallet_id}
          </p>
          <p className="py-1">
            <span className="font-semibold">Deposit Balance: </span> {user.depositBalance}
          </p>
          <p className="py-1">
            <span className="font-semibold">Withdrawable Balance: </span> {user.withdrawableBalance}
          </p>
          <p className="py-1">
            <span className="font-semibold">Created At: </span> {new Date(user.createdAt).toLocaleDateString()}
          </p>
          {/* Role selection */}
          <div className="py-2">
            <label className="block mb-2 font-semibold">Change Role:</label>
            <select
              value={selectedRole.role}
              onChange={handleRoleChange}
              className="w-full p-2 bg-gray-700 text-white rounded"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          {/* Submit button */}
          <button
            onClick={handleSubmit}
            className="w-full mt-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTopUp;
