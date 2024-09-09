import React, { useEffect, useState } from 'react';
import image from "./ss.png";
import { useSelector } from 'react-redux';

const WinTopup = ({ result = null, showwintopup = null, setShowwintopup = null }) => {
     
    
    const { gameresulthistory } = useSelector((state) => state.batle);
    
     useEffect(()=>{
        setTimeout(() => {
            setShowwintopup(false);
        }, 5000);
     },[])
  return (
    <>
      { (
        <div
          className={`${
            showwintopup === true ? "scale-1 opacity-1 transition-all duration-500 " : "opacity-0 scale-0 transition-all duration-500"
          } justify-center  flex items-center flex-col absolute top-0 left-0 min-h-screen w-full bg-[#1414151e]`}
        >
          <div className="relative bg-gradient-to-b from-[#5b77f0] to-[#00abfc] p-6 w-80 rounded-[2rem] shadow-lg">
            <img
              className="absolute -top-[5.3rem] -left-[0.1rem] w-full"
              src={image}
              alt=""
            />

            {/* Congratulations text */}
            <h2 className={`text-center text-2xl py-[2rem] font-bold text-white mb-2`}>
              {result.betstatus === "Win" ? "Congratulations" : "Try-again"}
            </h2>

            {/* Lottery results */}
            <div className="flex justify-center space-x-4 mb-4">
              <span className="text-white text-nowrap px-1 py-1">Lottery result</span>
              <span className={`bg-orange-600 text-white px-2 py-1 rounded-lg `}>
                {gameresulthistory[0].selectedNumber  >4   ? "Big" : "Small"}
              </span>
              
              <span className={`bg-orange-600 text-white px-2 py-1 rounded-lg  `}>
                {gameresulthistory[0].selectedNumber}
              </span>
            </div>

            {/* Bonus amount */}
            <div className="bg-blue-300 rounded-lg py-2 text-center mb-4">
              <div>
                <p className={`text-blue-900 font-semibold ${result.betstatus ==="Win" ? "text-green-600" : "text-red-600"}`}>{result.betstatus}</p>
                <p className={`text-2xl font-bold ${result.win_amount > 0 ? "text-green-600" : "text-red-600"}`}>
                {result.betstatus ==="Win" ? "+" : "-"} {result.win_amount !== 0 ? result.win_amount : result.bet_amount}
                </p>
              </div>
              <p className="text-xs text-blue-800">
                Period: {result.selectedTimer} {result.GameId}
              </p>
            </div>

            <div className="absolute -bottom-[6rem] right-[7.5rem] border rounded-full m-4">
              <button
                onClick={() => setShowwintopup(false)}
                className="bg-transparent border-0 p-2 text-white text-xl"
              >
                ❌
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WinTopup;
