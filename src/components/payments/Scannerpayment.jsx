// src/components/PaymentComponent.js
import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useLocation } from 'react-router-dom';

const Scannerpayment = () => {
    const location = useLocation();
    const { amount, way, orderNumber,
        network,
        upi,
        countdownTime } = location.state || {};
    console.log(amount, way, orderNumber,
        network,
        upi,
        countdownTime)
    const getCurrentFormattedDateTime = () => {
        const currentTime = new Date();

        const year = currentTime.getFullYear();
        const month = String(currentTime.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(currentTime.getDate()).padStart(2, '0');

        const hours = String(currentTime.getHours()).padStart(2, '0');
        const minutes = String(currentTime.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}`;
    };

    const formattedDateTime = getCurrentFormattedDateTime();


    const calculateTimeLeft = (expiryTime) => {
        const difference = new Date(expiryTime) - new Date();
        // console.log(difference)
        return difference > 0 ? Math.floor(difference / 1000) : 0;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(countdownTime));
    const [utr, setUtr] = useState("");
    const [disble, setDisble] = useState(false);
    useEffect(() => {
        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft(countdownTime);
            if (newTimeLeft <= 0) {
                clearInterval(timer);
            }
            setTimeLeft(newTimeLeft);
        }, 1000);

        if (utr.length > 12) {
            setDisble(false)
        }
        else {
            setDisble(true)
        }

        return () => clearInterval(timer);
    }, [countdownTime, utr]);

    const sumbithandler = () => {
        console.log(utr)
        alert("payment successfully send")
    }


    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className='flex items-center w-full h-screen bg-white z-50 relative  justify-center'>
            <div className="w-[400px] mx-auto bg-[#ffffff73]  shadow-lg rounded-lg overflow-hidden p-6">
                <h1 className="text-center text-lg font-bold text-green-600 mb-4">{way}</h1>

                <div className='flex  items-center justify-between text-nowrap text-[0.9rem] text-start'>

                    <div>
                        <p className=" ">Date: {formattedDateTime}</p>
                        <p className=" ">Transaction ID: {orderNumber}</p>

                    </div>
                    <div className=" pb-6 ">
                        {timeLeft > 0 ? (
                            <span className="text-gray-600">{formatTime(timeLeft)}</span>
                        ) : (
                            <span className="text-red-600  font-semibold">Time is up!</span>
                        )}
                    </div>

                </div>
                <div className="text-center text-2xl font-bold text-green-700 mb-4">₹ {amount}</div>


                <div className="flex justify-center mb-4">
                    <QRCode value={`upi://pay?pa=${upi}&am=${amount}&tid=${orderNumber}`} size={150} />
                </div>
                <div className="text-center text-gray-600 mb-2">Scan Code To Pay</div>
                <div className="flex justify-center mb-4">
                    <CopyToClipboard text={upi}>
                        <button className="bg-green-500 text-white px-4 py-2 rounded">Copy Account To Pay</button>
                    </CopyToClipboard>
                </div>
                <div className="text-center flex  items-center gap-2">
                    <input
                        value={utr}
                        onChange={(e) => setUtr(e.target.value)}
                        type="text"

                        placeholder="Input 12-digit UTR"
                        className="border p-2 rounded w-full focus:outline-none  "
                    />
                    <button disabled={disble} onClick={sumbithandler} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
                </div>
                <div className="bg-white p-6 mt-9 max-w-md mx-auto  ">
                    <h2 className="text-center text-blue-600 font-semibold mb-4">Contact us</h2>
                    <ul className="list-decimal list-inside text-gray-800">
                        <li>
                            please, contact us if you have any payment issue:
                            <a href="sk4896323@gmail.com" className="text-blue-600"> sk4896323@gmail.com</a>
                        </li>
                        <li>
                            Please select the payment method you need and make sure your phone has the corresponding wallet software installed.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};




export default Scannerpayment;