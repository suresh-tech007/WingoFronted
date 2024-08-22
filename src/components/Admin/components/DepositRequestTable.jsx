import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { GrDocumentUpdate } from 'react-icons/gr';
import { useDispatch ,useSelector} from 'react-redux';
import { deposithistory } from '../../../redux/actions/PaymentAciton';

// const transactionData = [
//   {
//     amount: 1500,
//     way: 100,
//     upi: 'user1@upi',
//     user_id: 'USER123',
//     transactionId: 'TXN001',
//     UTR_Number: 'UTR12345678',
//     status: 'Success',
//     createdAt: '2024-08-19T08:30:00Z',
//   },
//   {
//     amount: 2500,
//     way: 150,
//     upi: 'user2@upi',
//     user_id: 'USER124',
//     transactionId: 'TXN002',
//     UTR_Number: 'UTR23456789',
//     status: 'Pending',
//     createdAt: '2024-08-18T10:45:00Z',
//   },
//   {
//     amount: 1800,
//     way: 120,
//     upi: 'user3@upi',
//     user_id: 'USER125',
//     transactionId: 'TXN003',
//     UTR_Number: 'UTR34567890',
//     status: 'Failed',
//     createdAt: '2024-08-17T12:00:00Z',
//   },
//   {
//     amount: 3200,
//     way: 200,
//     upi: 'user4@upi',
//     user_id: 'USER126',
//     transactionId: 'TXN004',
//     UTR_Number: 'UTR45678901',
//     status: 'Success',
//     createdAt: '2024-08-16T14:20:00Z',
//   },
//   {
//     amount: 2200,
//     way: 160,
//     upi: 'user5@upi',
//     user_id: 'USER127',
//     transactionId: 'TXN005',
//     UTR_Number: 'UTR56789012',
//     status: 'Pending',
//     createdAt: '2024-08-15T16:35:00Z',
//   },
// ];

const statusColors = {
  Success: 'text-green-500',
  Pending: 'text-purple-500',
  Failed: 'text-red-500',
};

const DepositRequestTable = () => {
  const { deposithistory:depositHistory, loading, error } = useSelector(
    (state) => state.payment
  )
  const [data, setData] = useState("");
const dispatch = useDispatch();
  // Handle status change
  const handleStatusChange = (e, transactionId) => {
    const updatedData = data.map((row) =>
      row.transactionId === transactionId ? { ...row, status: e.target.value } : row
    );
    setData(updatedData);
  };

  // Handle delete row
  const handleDelete = (transactionId) => {
    const updatedData = data.filter((row) => row.transactionId !== transactionId);
    setData(updatedData);
  };

  // Handle update row (You can extend this function to perform any update operations)
  const handleUpdate = (transactionId) => {
    console.log(`Update transaction with ID: ${transactionId}`);
    // Implement your update logic here
  };
  useEffect(()=>{
    dispatch(deposithistory())

  },[])

  return (
    <div className="bg-[#060818] absolute right-0  w-[95%]  p-6 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Deposit Table</h2>
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full text-left bg-[#121424] text-gray-400">
          <thead className="bg-gray-800 text-gray-400">
            <tr>
              <th className="py-2 px-4">Transaction ID</th>
              <th className="py-2 px-4">User ID</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">way</th>
              <th className="py-2 px-4">UPI</th>
              <th className="py-2 px-4">UTR Number</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Created At</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {depositHistory && depositHistory.map((row) => (
              <tr key={row.transactionId} className="border-b border-gray-700">
                <td className="py-2 px-4">{row.transactionId}</td>
                <td className="py-2 px-4">{row.user_id}</td>
                <td className="py-2 px-4">{row.amount}</td>
                <td className="py-2 px-4">{row.way}</td>
                <td className="py-2 px-4">{row.upi}</td>
                <td className="py-2 px-4">{row.UTR_Number}</td>
                <td className={`py-2 px-4 ${statusColors[row.status]}`}>
                  <select
                    value={row.status}
                    onChange={(e) => handleStatusChange(e, row.transactionId)}
                    className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none"
                  >
                    <option value="Success">Success</option>
                    <option value="Pending">Pending</option>
                    <option value="Failed">Failed</option>
                  </select>
                </td>
                <td className="py-2 px-4">{new Date(row.createdAt).toLocaleString()}</td>
                <td className="py-2 px-4 flex space-x-2">
                  <button
                    onClick={() => handleDelete(row.transactionId)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <FaTrashAlt />
                  </button>
                  <button
                    onClick={() => handleUpdate(row.transactionId)}
                    className="text-gray-400 hover:text-blue-500"
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

export default DepositRequestTable;
