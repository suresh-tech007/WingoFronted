import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { GrDocumentUpdate } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { addMoneyinwallet, AllusersdepositRequest, clearErrors } from '../../../redux/actions/PaymentAciton';
import { toast } from 'react-toastify';
import Loading from "../../component/Loading";

const statusColors = {
  Success: 'text-green-500',
  Pending: 'text-purple-500',
  Failed: 'text-red-500',
};

const DepositRequestTable = () => {
  const { alldepositrequests, message, loading } = useSelector(
    (state) => state.payment
  );
  
  const [formdata, setFormdata] = useState({
    depositrequest_id: "", status: ""
  });

  const [loading2, setLoading2] = useState(false);
  const dispatch = useDispatch();

  // Handle status change
  const handleStatusChange = (e, row) => {
    setFormdata({
      depositrequest_id: row._id, status: e.target.value,
    });
  };

  // Handle delete row
  const handleDelete = (transationId) => {
    const updatedData = alldepositrequests.filter((row) => row.transationId !== transationId);
    setData(updatedData);  // Filtered data set here
  };

  // Handle update row
  const handleUpdate = async (_id) => {
    if (_id === formdata.depositrequest_id) {
      try {
        setLoading2(true); // Set loading state to true before making async calls
        // Wait for addMoneyinwallet to complete
        await dispatch(addMoneyinwallet(formdata));
        // After wallet update, refresh the deposit requests
        await dispatch(AllusersdepositRequest());
      } catch (error) {
        toast.error("An error occurred while updating");
      } finally {
        setLoading2(false); // Set loading state back to false when done
      }
    } else {
      return toast.error("Select valid values");
    }
  };

  // Load all deposit requests on component mount
  useEffect(() => {
    dispatch(AllusersdepositRequest());
  }, [dispatch]);

  // Show success message when `message` changes
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearErrors());
    }
  }, [message, dispatch]);

  return (
    <>
      {(loading || loading2) && <Loading />}
      <div className="bg-[#060818] absolute  right-0  w-full pl-[6rem]  min-h-screen  p-6  g">
        <h2 className="text-xl font-bold text-white mb-4">Deposit Table</h2>
        <div className="overflow-x-auto rounded-lg">
          <table className="w-full text-left bg-[#121424] text-gray-400">
            <thead className="bg-gray-800 text-gray-400">
              <tr>
                <th className="py-2 px-4">TransationId ID</th>
                <th className="py-2 px-4">User ID</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Way</th>
                <th className="py-2 px-4">UPI</th>
                <th className="py-2 px-4">UTR Number</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Created At</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {alldepositrequests && alldepositrequests.map((row) => (
                <tr key={row.transationId} className="border-b border-gray-700">
                  <td className="py-2 px-4">{row.transationId}</td>
                  <td className="py-2 px-4">{row.user_id}</td>
                  <td className="py-2 px-4">{row.amount}</td>
                  <td className="py-2 px-4">{row.way}</td>
                  <td className="py-2 px-4">{row.upi}</td>
                  <td className="py-2 px-4">{row.UTR_Number}</td>
                  <td className={`py-2 px-4 ${statusColors[row.status]}`}>
                    <select
                      disabled={row.status === "Success"}
                      value={(formdata.depositrequest_id === row._id) ? formdata.status : row.status}
                      onChange={(e) => handleStatusChange(e, row)}
                      className={`${statusColors[(formdata.depositrequest_id === row._id) ? formdata.status : row.status]} p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Success">Success</option>
                      <option value="Failed">Failed</option>
                    </select>
                  </td>
                  <td className="py-2 px-4">{new Date(row.createdAt).toLocaleString()}</td>
                  <td className="py-5 px-4 flex space-x-2">
                    <button
                      onClick={() => handleDelete(row.transationId)}
                      className="text-gray-400 text-[1.5rem] mr-1 hover:text-red-500"
                    >
                      <FaTrashAlt />
                    </button>
                    <button
                      disabled={loading || loading2 || row.status === "Success"}
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
    </>
  );
};

export default DepositRequestTable;
