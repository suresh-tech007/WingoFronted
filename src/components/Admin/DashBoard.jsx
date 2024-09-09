import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { AllusersdepositRequest, AlluserswithdrawRequest } from '../../redux/actions/PaymentAciton';
import { useDispatch, useSelector } from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const optionss = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        color: '#ec0d0d',
      },
    },
    y: {
      ticks: {
        color: '#2543c8',
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: 'white',
      },
    },
  },
  layout: {
    padding: 20,
  },
};

const categoryData = {
  labels: ['Apparel', 'Sports', 'Others'],
  datasets: [{
    data: [100, 800, 592],
    backgroundColor: ['#8B5CF6', '#F59E0B', '#EF4444'],
    borderWidth: 12,
    borderColor: 'transparent',
  }]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',
  layout: {
    padding: {
      top: 20,
      bottom: 20,
    }
  }
};

// Generate 24-hour labels
const hoursArray = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

const DashBoard = () => {
  const { allwithdrawtransaction, alldepositrequests, message, loading, error } = useSelector(
    (state) => state.payment
  );
  
  // Initialize state for storing hour-wise data for withdrawals and deposits
  const [withdrawData, setWithdrawData] = useState(new Array(24).fill(0));
  const [depositData, setDepositData] = useState(new Array(24).fill(0));
  const [totalProfit, setTotalProfit] = useState(0);  // State for total profit

  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch actions to get data
    dispatch(AlluserswithdrawRequest());
    dispatch(AllusersdepositRequest());
  }, [dispatch]);

  useEffect(() => {
    // Initialize new data arrays for each hour
    const newWithdrawData = new Array(24).fill(0);
    const newDepositData = new Array(24).fill(0);

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    // Map withdraw transactions to hours
    if (allwithdrawtransaction) {
      allwithdrawtransaction.forEach((transaction) => {
        const transactionDate = new Date(transaction.createdAt).toISOString().split('T')[0];
        if (transactionDate === today) {
          const hour = new Date(transaction.createdAt).getHours();
          newWithdrawData[hour] += transaction.amount;  // Add to the hour's total amount
        }
      });
    }

    // Map deposit transactions to hours
    if (alldepositrequests) {
      alldepositrequests.forEach((transaction) => {
        const transactionDate = new Date(transaction.createdAt).toISOString().split('T')[0];
        if (transactionDate === today) {
          const hour = new Date(transaction.createdAt).getHours();
          newDepositData[hour] += transaction.amount;  // Add to the hour's total amount
        }
      });
    }
    

    // Set the new data for withdrawal and deposit
    setWithdrawData(newWithdrawData);
    setDepositData(newDepositData);

    // Calculate total profit
    const totalWithdrawAmount = newWithdrawData.reduce((acc, curr) => acc + curr, 0);
    const totalDepositAmount = newDepositData.reduce((acc, curr) => acc + curr, 0);
    const calculatedProfit = totalDepositAmount - totalWithdrawAmount;

    setTotalProfit(calculatedProfit);
  }, [allwithdrawtransaction, alldepositrequests]);

  // Prepare the data for the line chart
  const revenueData = {
    labels: hoursArray,  // Correct 24-hour labels
    datasets: [
      {
        label: 'Withdraw',
        data: withdrawData,  // Correctly mapped withdraw amounts
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
        tension: 0.2,
      },
      {
        label: 'Deposit',
        data: depositData,  // Correctly mapped deposit amounts
        borderColor: '#EF4444',
        backgroundColor: 'rgba(145, 68, 239, 0.945)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className='h-screen flex text-white w-full bg-[#060818] z-50 relative'>
      <nav className='h-full w-[4rem]'>
        <Sidebar />
      </nav>
      <div className='h-full w-full p-[1.5rem]'>
        <h1 className='text-[#3e5ee1] text-[0.9rem]'>
          Dashboard
        </h1>
        <div className="grid grid-cols-3 gap-6 p-6 mx-auto rounded-lg bg-gray-900 text-white">
          <div className="col-span-2 bg-[#060818] p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Revenue</h2>
              <div className="text-gray-400">
                Total Profit <span className="text-blue-400">₹{totalProfit.toFixed(2)}</span>
              </div>
            </div>
            <div className="relative h-[90%]">
              <Line data={revenueData} options={optionss} />
            </div>
          </div>
          <div className="bg-[#060818] p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Sales By Category</h2>
            <div className="relative h-72">
              <Doughnut data={categoryData} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
