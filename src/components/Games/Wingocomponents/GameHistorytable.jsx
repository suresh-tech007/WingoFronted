import React, { useEffect, useState } from 'react'
import Gamehistoryatable from '../../component/Gamehistoryatable';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
 
const GameHistorytable = ({}) => {
  const { gameresulthistory, error } = useSelector((state) => state.batle);
 

  

  useEffect(()=>{
    if(error){
     toast.error(error)
    }
  },[error])

  return (
    <table className="  rounded-lg text-[0.9rem] m-4 bg-[#374992] text-white">
    <thead>
      <tr>
        <th className="py-2 px-2   border-gray-300">GameId</th>
        <th className="py-2 px-2   border-gray-300">Number</th>
        <th className="py-2 px-2   text-nowrap border-gray-300">Big Small</th>
        <th className="py-2 px-2   border-gray-300">Color</th>
      </tr>
    </thead>
    <tbody>
      {gameresulthistory && gameresulthistory.map((row, index) => (
        <Gamehistoryatable row={row} key={row.Game_id} />
      ))}
    </tbody>
  </table>
  )
}

export default GameHistorytable