import React from 'react'
import Gamehistoryatable from '../../component/Gamehistoryatable';
const data = [
    { period: '20240804010566', number: 0, bigSmall: 'Small', color: ['purple', 'red'] },
    { period: '20240804010565', number: 5, bigSmall: 'Big', color: ['green', 'purple'] },
    { period: '20240804010564', number: 4, bigSmall: 'Small', color: ['red'] },
    { period: '20240804010563', number: 0, bigSmall: 'Small', color: ['purple', 'red'] },
    { period: '20240804010562', number: 1, bigSmall: 'Small', color: ['green', 'red'] },
    { period: '20240804010561', number: 2, bigSmall: 'Small', color: ['red'] },
    { period: '20240804010560', number: 9, bigSmall: 'Big', color: ['green'] },
    { period: '20240804010559', number: 6, bigSmall: 'Big', color: ['red'] },
    { period: '20240804010558', number: 6, bigSmall: 'Big', color: ['red'] },
    { period: '20240804010557', number: 0, bigSmall: 'Small', color: ['purple', 'red'] },
  ];

const GameHistorytable = () => {
  return (
    <table className="  rounded-lg text-[0.9rem] m-4 bg-[#374992] text-white">
    <thead>
      <tr>
        <th className="py-2 px-2   border-gray-300">Period</th>
        <th className="py-2 px-2   border-gray-300">Number</th>
        <th className="py-2 px-2   text-nowrap border-gray-300">Big Small</th>
        <th className="py-2 px-2   border-gray-300">Color</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <Gamehistoryatable row={row} key={index} />
      ))}
    </tbody>
  </table>
  )
}

export default GameHistorytable