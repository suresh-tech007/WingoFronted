import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Deposit', 'withdraw', 'Profit' ],
  datasets: [
    {
      label: 'Monthly Data',
      data: [ 290, 2390, 3490],
      backgroundColor: [
        '#e7515a',
        '#e2a03f',
        '#5c1ac3',
      ],
      borderColor: 'transparent', // No border color to ensure no visible border
      borderWidth: 0,
        spacing: 20 // Set borderWidth to 0
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      margin:"4px",
      labels: {
        color: 'white',
        font: {
          size: 14
        }
      }
    },
    tooltip: {
      callbacks: {
        labelTextColor: () => '#fff',
      }
    },
    
  },
  cutout: '75%', 
    
};

const MyDoughnutChart = () => (
  <div  className='flex w-[25rem] m-auto' >
    <Doughnut data={data} options={options} />
  </div>
);

export default MyDoughnutChart;
