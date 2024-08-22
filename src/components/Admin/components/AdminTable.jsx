import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { GrDocumentUpdate } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getUserDetails, clearErrors } from '../../../redux/actions/userAction';
import { toast } from 'react-toastify';
import Loading from '../../component/Loading';

const statusColors = {
  Admin: 'text-green-500',
  User: 'text-purple-500',
};

const AdminTable = () => {
  const { users, loading, error } = useSelector((state) => state.allUsers);
  const { user, loading: loading2, error: error2 } = useSelector((state) => state.userDetails);
  // console.log(users)
  const dispatch = useDispatch();
  const [topup, setTopup] = useState(false);
  const [adminUsers, setAdminUsers] = useState([]);

  useEffect(() => {
    dispatch(getAllUsers());

    if (error || error2) {
      toast.error(error || error2);
      dispatch(clearErrors());
    }

    if (users) {
      const admins = users.filter(user => user.role === "admin");
      setAdminUsers(admins);
    }
  }, [dispatch, error, error2, users]);

  return (
    <div className="bg-[#060818] absolute right-0 w-[95%] p-6 rounded-lg">
      
      <h2 className="text-xl font-bold text-white mb-4">Admin Table</h2>
       
      {loading || loading2 && <Loading />}
     
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
            {users && adminUsers.map((row, index) => (
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

export default AdminTable;
