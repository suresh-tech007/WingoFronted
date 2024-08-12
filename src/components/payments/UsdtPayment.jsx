import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { useLocation } from 'react-router-dom';

const UsdtPayment = () => {
  const location = useLocation();
  const { 
    img,
    amount,
    orderNumber,
    network,
    walletAddress,
    countdownTime } = location.state || {};

  const calculateTimeLeft = (expiryTime) => {
    const difference = new Date(expiryTime) - new Date();
    
    return difference > 0 ? Math.floor(difference / 1000) : 0;
  };


  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(countdownTime));
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="relative z-50 flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <div className="text-center mb-6 ">
         <div className='flex  items-center justify-center  '>
          
         <img className="w-[5rem]" src={img} alt="Logo"   />
         </div>
          <h2 className="text-2xl font-semibold mt-4">{amount} USDT</h2>
          <p className="text-sm text-red-500 mt-2">
            The amount received will be subject to the actual transfer amount. Not less than {amount} USDT.
          </p>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">CountDown</span>
          <span className="font-semibold text-red-500">{formatTime(timeLeft)}</span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Order Number</span>
          <span className="font-semibold">{orderNumber}</span>
        </div>

        <div className="flex justify-center mb-4">
          <QRCode value={walletAddress} size={150} />
        </div>

        <div className="mb-4">
          <div className="font-semibold">Network</div>
          <div className="bg-gray-100 p-2 rounded">{network}</div>
        </div>

        <div className="mb-4">
          <div className="font-semibold">Wallet Address</div>
          <div className="bg-gray-100 p-2 rounded">{walletAddress}</div>
        </div>

        <div className="text-sm text-gray-700">
          <div className="font-semibold">Warning:</div>
          <ol className="list-decimal list-inside">
            <li>Minimum deposit amount: {amount}USDT, deposits less than the minimum amount will not be credited.</li>
            <li>Please do not recharge any non-currency assets to the above address, otherwise the assets will not be retrieved.</li>
            <li>Please make sure the operating environment is safe to prevent information from being tampered with and leaked.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default UsdtPayment;
