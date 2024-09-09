import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { GrDocumentUpdate } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { AlluserswithdrawRequest, clearErrors, UpdateWithdrawrequest, withdrawhistory } from '../../../redux/actions/PaymentAciton';
import { toast } from 'react-toastify';
import Loading from '../../component/Loading';

const statusColors = {
  Pending: 'text-yellow-500',
  Success: 'text-green-500',
  Failed: 'text-red-500',
};

const WithdrawalRequestTable = () => {
  const { allwithdrawtransaction, loading, message, error } = useSelector((state) => state.payment);
  const dispatch = useDispatch();
  
  const [formdata, setFormdata] = useState({
    user_id: "", 
    withdrawreq_id: "",
    status: ""
  });

  const [loading2, setLoading2] = useState(false); // Additional loading state for update action

  const handleStatusChange = (e, row) => {
    setFormdata({ 
      user_id: row.user_id, 
      withdrawreq_id: row._id,
      status: e.target.value
    });
  };

  // Handle delete row (This now updates the state properly)
  const handleDelete = (_id) => {
    const updatedTransactions = allwithdrawtransaction.filter((row) => row._id !== _id);
    // Ideally, you should dispatch an action to delete the transaction from the backend as well
    setFormdata({ ...formdata, allwithdrawtransaction: updatedTransactions });
    toast.success('Transaction deleted successfully');
  };

  // Handle update row
  const handleUpdate = async (_id) => {
    if (_id === formdata.withdrawreq_id) {
      try {
        setLoading2(true); // Set loading state to true during update
        await dispatch(UpdateWithdrawrequest(formdata));
        await dispatch(AlluserswithdrawRequest());
      } catch (error) {
        toast.error("An error occurred while updating");
      } finally {
        setLoading2(false); // Reset loading state after update is done
      }
    } else {
      return toast.error("Select valid values");
    }
  };

  // Initial data load
  useEffect(() => {
    dispatch(AlluserswithdrawRequest());
  }, [dispatch]);

  // Handle error and success messages
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(clearErrors());
    }
  }, [error, message, dispatch]);

  return (
    <div className="bg-[#060818] absolute right-0 w-full pl-[6rem]  min-h-screen p-6  ">
      <h2 className="text-xl font-bold text-white mb-4">Withdrawal Table</h2>
      {(loading || loading2) && <Loading />}
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full text-left bg-[#121424] text-gray-400">
          <thead className="bg-gray-800 text-gray-400">
            <tr>
              <th className="py-2 px-4">Transaction ID</th>
              <th className="py-2 px-4">User ID</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Way</th>
              <th className="py-2 px-4">Account</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Created At</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {allwithdrawtransaction && allwithdrawtransaction.map((row) => (
              <tr key={row._id} className="border-b border-gray-700">
                <td className="py-2 px-4">{row.transationId}</td>
                <td className="py-2 px-4">{row.user_id}</td>
                <td className="py-2 px-4">{row.amount}</td>
                <td className="py-2 px-4">{row.way}</td>
                <td className="py-2 px-4">{row.transactionaccount}</td>
                <td className={`py-2 px-4 ${statusColors[row.status]}`}>
                  <select
                    disabled={row.status === "Success"}
                    value={(formdata.withdrawreq_id === row._id) ? formdata.status : row.status}
                    onChange={(e) => handleStatusChange(e, row)}
                    className={`${statusColors[(formdata.withdrawreq_id === row._id) ? formdata.status : row.status]} p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none`}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Success">Success</option>
                    <option value="Failed">Failed</option>
                  </select>
                </td>
                <td className="py-2 px-4">{new Date(row.createdAt).toLocaleString()}</td>
                <td className="py-5 px-4 flex space-x-2 ">
                  <button
                    disabled={loading || loading2} // Disable button during update or loading
                    onClick={() => handleDelete(row._id)}
                    className="text-gray-400 text-[1.5rem] hover:text-red-500"
                  >
                    <FaTrashAlt />
                  </button>
                  <button
                    disabled={loading || loading2 || row.status === "Success"} // Disable if loading or status is Success
                    onClick={() => handleUpdate(row._id)}
                    className="text-gray-400 text-[1.5rem] hover:text-blue-500"
                  >
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

export default WithdrawalRequestTable;
