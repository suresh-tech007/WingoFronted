import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', Deposit: 4000, Withdraw: 2400 },
  { name: 'Feb', Deposit: 3000, Withdraw: 1398 },
  { name: 'Mar', Deposit: 2000, Withdraw: 9800 },
  { name: 'Apr', Deposit: 2780, Withdraw: 3908 },
  { name: 'May', Deposit: 1890, Withdraw: 4800 },
  { name: 'Jun', Deposit: 2390, Withdraw: 3800 },
  { name: 'Jul', Deposit: 3490, Withdraw: 4300 },
  // Add more data as needed
];

const MyAreaChart = () => (
  <div style={{ width: '20rem', height: '25rem' }}>
    <AreaChart  width={'60vw'}
       height={parseInt('25rem') * 16} className='w-full h-full' data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="##171e2f" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="##171e2f" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis
        stroke="#161d360" // Change the axis line color
        tick={{ fill: 'white', fontSize: 12 }} // Change the label color
        dataKey="name" />
      <YAxis
        stroke="#161d360" // Change the axis line color
        tick={{ fill: 'white', fontSize: 12 }}
      />
      <CartesianGrid stroke="#161d36" strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey="Deposit" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      <Area type="monotone" dataKey="Withdraw" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      <Legend />
    </AreaChart>

  </div>

);

export default MyAreaChart;
