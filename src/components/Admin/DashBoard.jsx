import React from 'react'
import Sidebar from './Sidebar/Sidebar'
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

 
  // Data for the revenue line chart
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Withdraw',
        data: [1,16000, 17000, 15000, 18000, 19000, 17000, 14000, 16000, 18000, 15000, 16000, 18000],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
        tension: 0.2,
      },
      {
        label: 'Deposit',
        data: [0,15000, 16000, 17000, 16000, 18000, 15000, 13000, 15000, 17000, 14000, 15000, 16000],
        borderColor: '#EF4444',
        backgroundColor: 'rgba(145, 68, 239, 0.945)',
        fill: true,
        tension: 0.3,
      }
    ]
  };
  const optionss = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
         
        ticks: {
          color: '#ec0d0d', // Color of X axis labels
        },
      },
      y: {
        
        ticks: {
          color: '#2543c8', // Color of Y axis labels
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', // Color of the legend text
        },
      },
    },
    layout: {
      padding: 20, // Add padding to the chart area
    },
  };

  // Data for the sales by category doughnut chart
  const categoryData = {
    labels: ['Apparel', 'Sports', 'Others'],
    datasets: [{
      data: [100, 800, 592],
      backgroundColor: ['#8B5CF6', '#F59E0B', '#EF4444'],
      borderWidth: 12, // Adds spacing between segments
      borderColor: 'transparent', // Matches the background color for clean spacing
      
    }]
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',  // Controls the inner radius
    layout: {
      padding: {
        top: 20,  // Add some padding to control spacing around the chart
        bottom: 20,
      }
    }
  };

const DashBoard = () => {
  return (
    <div className=' h-screen flex text-white w-full bg-[#060818] z-50 relative '>
      <nav className='h-full w-[4rem]'>
      <Sidebar />
      </nav>
      <div className='h-full w-full p-[1.5rem] '
      >
        <h1 className='text-[#3e5ee1] text-[0.9rem]'>
        Dashboard
        </h1>
        
      <div className="grid grid-cols-3 gap-6  p-6   mx-auto rounded-lg bg-gray-900 text-white ">
        
        <div className="col-span-2 bg-[#060818] p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Revenue</h2>
            <div className="text-gray-400">Total Profit <span className="text-blue-400">$10,840</span></div>
          </div>
          <div className="relative h-[90%] ">
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
  )
}

export default DashBoard