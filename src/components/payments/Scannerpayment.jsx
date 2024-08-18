import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, depositrequest } from '../../redux/actions/PaymentAciton';
import { toast } from 'react-toastify';

const Scannerpayment = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.user);
    const { message, error } = useSelector((state) => state.payment);
    const { amount, way, orderNumber, upi, countdownTime } = location.state || {};

    // DateTime Formatting Function
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

    // Calculate Time Left
    const calculateTimeLeft = (expiryTime) => {
        const difference = new Date(expiryTime) - new Date();
        return difference > 0 ? Math.floor(difference / 1000) : 0;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(countdownTime));
    const [disble, setDisble] = useState(true);
    const [requestdata, setRequestdata] = useState({
        amount: "", way: "", upi: "", user: "", utr: "",
        transationId: ""
    });

    // Timer Effect
    useEffect(() => {
        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft(countdownTime);
            if (newTimeLeft <= 0) {
                clearInterval(timer);
            }
            setTimeLeft(newTimeLeft);
        }, 1000);

        return () => clearInterval(timer); // Timer cleanup on component unmount
    }, [countdownTime]);

    // UTR Length Effect
    useEffect(() => {
        setDisble(requestdata.utr.length < 12);
    }, [requestdata.utr]);

    // Request Data and Notifications Effect
    useEffect(() => {
        // Update requestdata when orderNumber or other dependencies change
        if (orderNumber) {
            setRequestdata(prev => ({
                ...prev,
                transationId: orderNumber
            }));
        }
        if (upi && way && amount && user) {
            setRequestdata(prev => ({
                ...prev,
                upi, way, amount, user: user._id
            }));
        }
        if (message) {
            toast.success(message);
            dispatch(clearErrors());
            setTimeout(() => {
                navigate("/deposit");
            }, 500);
        }
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
            setTimeout(() => {
                navigate("/deposit");
            }, 500);
        }
    }, [orderNumber, upi, way, amount, user, message, error, dispatch]);

    // Submit Handler
    const sumbithandler = () => {
        if (timeLeft > 0) {
            dispatch(depositrequest(requestdata));
            
           
        } else {
            toast.error("Time is up!");
            setTimeout(() => {
                navigate("/deposit");
            }, 500);
        }
    };

    // Clipboard Copy Handler
    const handleclipboard = () => {
        toast.success("Copied successfully");
    };

    // UTR Input Handler
    const utrhandler = (e) => {
        const { value } = e.target;
        setRequestdata(prev => ({
            ...prev,
            utr: value
        }));
    };

    // Time Formatting Function
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className='flex items-center w-full bg-white z-50 relative justify-center'>
            <div className="w-[100vw] sm:w-[400px] lg:w-[400px] md:w-[400px] mt-[2rem] mx-auto bg-[#ffffff] shadow-lg rounded-lg overflow-hidden p-6">
                <h1 className="text-center text-lg font-bold text-green-600 mb-4">{way}</h1>
                <div className='flex w-full items-start flex-col gap-3 text-nowrap text-[0.9rem] text-start'>
                    <div className='flex items-center justify-between w-full '>
                        <p className=" ">Date: {formattedDateTime}</p>
                        {timeLeft > 0 ? (
                            <span className="text-gray-600">{formatTime(timeLeft)}</span>
                        ) : (
                            <span className="text-red-600 font-semibold">Time is up!</span>
                        )}
                    </div>
                    <div className="pb-6">
                        <p className=" ">Transaction ID: {orderNumber}</p>
                    </div>
                </div>
                <div className="text-center text-2xl font-bold text-green-700 mb-4">₹ {amount}</div>
                <div className="flex justify-center mb-4">
                    <QRCode value={`upi://pay?pa=${upi}&am=${amount}&tid=${orderNumber}`} size={150} />
                </div>
                <div className="text-center text-gray-600 mb-2">Scan Code To Pay</div>
                <div className="flex justify-center mb-4">
                    <CopyToClipboard text={upi}>
                        <button onClick={handleclipboard} className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">Copy Account To Pay</button>
                    </CopyToClipboard>
                </div>
                <div className="text-center flex items-center gap-2">
                    <input
                        value={requestdata.utr}
                        onChange={utrhandler}
                        type="text"
                        placeholder="Input 12-digit UTR"
                        className="border p-2 rounded w-full focus:outline-none"
                    />
                    <button disabled={disble} onClick={sumbithandler} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
                </div>
                <div className="bg-white p-6 mt-9 max-w-md mx-auto">
                    <h2 className="text-center text-blue-600 font-semibold mb-4">Contact us</h2>
                    <ul className="list-decimal list-inside text-gray-800">
                        <li>
                            Please contact us if you have any payment issues:
                            <a href="mailto:sk4896323@gmail.com" className="text-blue-600"> sk4896323@gmail.com</a>
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
