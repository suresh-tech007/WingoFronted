import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import paytm from "../../iamges/paytm.png";
import upiimg from "../../iamges/upiqr.png"
import all from "../../iamges/all.png"
import USTD from "../../iamges/USTD.png"
import TRX from "../../iamges/TRX.jpg"
import Amountbutton from './Amountbutton';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getUpiDetails } from '../../redux/actions/PaymentAciton';
import { toast } from 'react-toastify';
import Loading from '../component/Loading';

const generateTransactionId = () => {
    const timestamp = Date.now(); // Get current timestamp
    const randomNum = Math.floor(Math.random() * 100000); // Generate a random number
    return `TXN-${timestamp}-${randomNum}`;
};



const Recharge = () => {
    const transactionId = generateTransactionId();
    const { withdrawableBalance,depositBalance,UpiDetails,loading ,message,error} = useSelector((state) => state.payment);
    const [amount, setAmount] = useState("");
    const [way, setWay] = useState('');
    const [upi, setUpi] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [orderNumber, setOrderNumber] = useState(null);
    const [walletAddress, setWalletAddress] = useState("");
    
    const [walletbalance, setWalletbalance] = useState(null)

    const navigate = useNavigate();
    const dispatch = useDispatch()
   


    const Deposithandleclick = () => {
        const currentTime = new Date();
        const countdownTime = new Date(currentTime.getTime() + 15 * 60 * 1000); // 10 minutes from now


        if (way === "paytmQR" || way === "UPI-QR" || way === "EWallet") {
            navigate('/QRpayment', {
                state: {
                    amount,
                    way,
                    orderNumber,
                     
                    upi,
                    countdownTime   
                }
            });
        }
        else if (way === "USDT" || way === "TRX-Bonus") {
            
            navigate('/Payment', {
                state: {
                    img: way === "USDT" ? USTD : TRX,
                    amount,
                    orderNumber,
                    network:"kldsajfi",
                    walletAddress,
                    countdownTime: countdownTime , // 5 minutes in 
                }
            });
        }

    }



    const reloadhanlde = () => {
        navigate("/deposit")

    }
    const handlewayOnclick = (way) => {
        setWay(way)

        if (way == "TRX-Bonus" || way == "USDT") {

            setAmount("")
        }

    }

    useEffect(() => {

        if (way === null || amount === null) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
        if (withdrawableBalance && depositBalance) {
            setWalletbalance( withdrawableBalance +  depositBalance)
        }
        if(UpiDetails){
            setUpi(UpiDetails.upiId)
            setWalletAddress(UpiDetails.walletId)
        }
        

        setOrderNumber(transactionId)
        dispatch(getUpiDetails())
        if (message) {
            toast.success(message)
            dispatch(clearErrors())
        }
        if (error) {
            toast.error(error)
            dispatch(clearErrors())
        }
        dispatch(getUpiDetails())

        return ;

    }, [way, amount,dispatch,withdrawableBalance,depositBalance,message,error])


    return (

        <div className="flex relative   items-center justify-center     h-full   max-h-full    bg-gray-400">

            <div className="      bg-[#22275b]   pt-[3rem]     w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]      ">
            { loading && <Loading />}
                <div className='text-white  flex items-center fixed top-0   w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px] justify-between px-3 h-[3rem] bg-[#2b3270]'>
                    <Link to={"/wallet"}><img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=40217&format=png&color=FBFBFB" alt="" /></Link>
                    <div className='flex   gap-[4rem]'>
                        <h1>Deposit</h1>
                        <Link to={"/deposithistory"}>Deposit history</Link>
                    </div>
                </div>

                <div className='  ' >
                    <div className='bg-gradient-to-r from-teal-400  to-blue-500    rounded-[20px] m-3 p-5 text-white flex  flex-col justify-between   '>
                        <div className='flex   items-center gap-3  '>
                            <img className='  h-[2rem]' src="https://img.icons8.com/?size=100&id=LxhmnBiCAvFS&format=png&color=000000" alt="" />
                            <p> Balance </p>
                        </div>
                        <div className='flex  gap-2 items-center'>
                            <h2 className='text-start font-bold font-sans text-[1.6rem]  '> ₹ {depositBalance  &&walletbalance >0 ?walletbalance : "0.00"}</h2>
                            <button onClick={reloadhanlde} ><img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=1742&format=png&color=FFFFFFCC" alt="reload" /></button>
                        </div>
                        <div className='flex  items-center justify-between'>
                            <img className='h-[3.5rem]' src="https://img.icons8.com/?size=100&id=XvUO8tVlSEL4&format=png&color=000000" alt="" />
                            <span>***</span>
                        </div>
                    </div>
                </div>

                <div className='     grid grid-cols-3 gap-3 p-4'>
                    <div className={` ${way == "paytmQR" ? "bg-gradient-to-r from-teal-400  to-blue-500  text-white " : "bg-[#2b3270] text-gray-400"} active:bg-blue-500     rounded-xl    flex flex-col  py-4 items-center `} onClick={() => handlewayOnclick("paytmQR")} >
                        <img src={paytm} className='w-[3rem]' alt=" paytm" />
                        <span className='text-[12px] font-light'>Paytm x QR</span>
                    </div>
                    <div className={` ${way == "EWallet" ? "bg-gradient-to-r from-teal-400  to-blue-500  text-white " : "bg-[#2b3270] text-gray-400"} active:bg-blue-500     rounded-xl    flex flex-col  py-4 items-center `} onClick={() => handlewayOnclick("EWallet")}>
                        <img src={all} className='w-[3rem]' alt="" />
                        <span className='text-[12px] font-light'>E-wallet</span>
                    </div>
                    <div className={` ${way == "UPI-QR" ? "bg-gradient-to-r from-teal-400  to-blue-500  text-white " : "bg-[#2b3270] text-gray-400"} active:bg-blue-500     rounded-xl    flex flex-col  py-4 items-center `} onClick={() => handlewayOnclick("UPI-QR")}>
                        <img src={upiimg} className='w-[3rem]' alt="" />
                        <span className='text-[12px] font-light'>UPI x QR</span></div>
                    <div className={` ${way == "USDT" ? "bg-gradient-to-r from-teal-400  to-blue-500  text-white " : "bg-[#2b3270] text-gray-400"} active:bg-blue-500     rounded-xl    flex flex-col  py-4 items-center `} onClick={() => handlewayOnclick("USDT")}>
                        <img src={USTD} className='w-[3rem]' alt=" ustd" />
                        <span className='text-[12px] font-light'>USDT</span></div>
                    <div className={` ${way == "TRX-Bonus" ? "bg-gradient-to-r from-teal-400  to-blue-500  text-white " : "bg-[#2b3270] text-gray-400"} active:bg-blue-500     rounded-xl    flex flex-col  py-4 items-center `} onClick={() => handlewayOnclick("TRX-Bonus")}>
                        <img src={TRX} className='w-[3rem]' alt=" trx" />
                        <span className='text-[12px] font-light'>TRX Bonus</span>
                    </div>
                </div>

                <div className='flex bg-[#2b3270] flex-col font-sans  text-white rounded-[20px]  p-5 gap-3 m-3  '>
                    <div>

                        <h1>
                            Deposit amount
                        </h1>
                    </div>
                    {way === "USDT" ? (
                        <div>
                            <Amountbutton USTD={USTD} setAmount={setAmount} />

                            <div className='  h-[2.5rem] border rounded-3xl my-4 flex items-center justify-evenly px-2'>
                                <img className='w-[1.8rem]' src={USTD} alt="" />
                                <input
                                    type="text"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value || "")}
                                    className='border-l bg-transparent focus:outline-none outline-none ml-3 pl-3 w-full border-gray-500 text-white text-[1.1rem]'
                                    placeholder='Please enter the amount'
                                />
                                <img onClick={() => setAmount("")} className='w-[2rem] cursor-pointer' src="https://img.icons8.com/?size=100&id=3062&format=png&color=8C919699" alt="" />
                            </div>

                            <div className='  h-[2.5rem] border rounded-3xl flex items-center justify-evenly px-2'>
                                <img className='w-[1.8rem]' src="https://img.icons8.com/?size=100&id=87785&format=png&color=056FEBBF" alt="" />
                                <input
                                    readOnly
                                    type="text"
                                    value={amount ? amount * 93.5 : ""}
                                    className='border-l cursor-not-allowed bg-transparent focus:outline-none outline-none ml-3 pl-3 w-full border-gray-500 text-white text-[1.1rem]'
                                    placeholder='amount in rupees'
                                />
                            </div>
                            <p className={`${amount < 10 ? "block" : "hidden"} text-red-500 ml-3 text-[0.7rem] font-semibold`}> Minimum deposit amount is 10 USDT </p>
                        </div>


                    ) : way === "TRX-Bonus" ? ((
                        <div>
                            <Amountbutton USTD={TRX} setAmount={setAmount} />

                            <div className='  h-[2.5rem] border rounded-3xl my-4 flex items-center justify-evenly px-2'>
                                <img className='w-[1.8rem]' src={TRX} alt="" />
                                <input
                                    type="text"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className='border-l bg-transparent focus:outline-none outline-none ml-3 pl-3 w-full border-gray-500 text-white text-[1.1rem]'
                                    placeholder='Please enter the amount'
                                />
                                <img
                                    onClick={() => setAmount("")}
                                    className='w-[2rem] cursor-pointer'
                                    src="https://img.icons8.com/?size=100&id=3062&format=png&color=8C919699"
                                    alt=""
                                />
                            </div>

                            <div className='  h-[2.5rem] border rounded-3xl flex items-center justify-evenly px-2'>
                                <img className='w-[1.8rem]' src="https://img.icons8.com/?size=100&id=87785&format=png&color=056FEBBF" alt="" />
                                <input
                                    type="text"
                                    readOnly
                                    value={amount ? amount * 10.8 : ""}
                                    className='border-l cursor-not-allowed bg-transparent focus:outline-none outline-none ml-3 pl-3 w-full border-gray-500 text-white text-[1.1rem]'
                                    placeholder='amounts in rupees'
                                />
                            </div>
                            <p className={`${amount  < 10 ? "block" : "hidden"} text-red-500 ml-3 text-[0.7rem] font-semibold`}> Minimum deposit amount is 10 TRX </p>
                        </div>

                    )) : (
                        <>
                            <div className='grid grid-cols-3 gap-4 '>
                                <div className='border border-[#374992] rounded-lg items-center flex gap-5 mx-2  justify-evenly  cursor-pointer' onClick={() => setAmount(200)} >
                                    <span className='text-[gray] font-semibold text-[1.2rem] '>₹</span>
                                    <span className='text-[#367ff6] font-semibold text-[1.3rem]'>200</span>
                                </div>
                                <div className='border border-[#374992] rounded-lg items-center flex gap-5 mx-2  justify-evenly cursor-pointer' onClick={() => setAmount(500)}>
                                    <span className='text-[gray] font-semibold text-[1.2rem] '>₹</span>
                                    <span className='text-[#367ff6] font-semibold text-[1.3rem]'>500</span>
                                </div> <div className='border border-[#374992] rounded-lg items-center flex gap-5 mx-2  justify-evenly cursor-pointer' onClick={() => setAmount(1000)}>
                                    <span className='text-[gray] font-semibold text-[1.2rem] '>₹</span>
                                    <span className='text-[#367ff6] font-semibold text-[1.3rem]'>1K</span>
                                </div> <div className='border border-[#374992] rounded-lg items-center flex gap-5 mx-2  justify-evenly cursor-pointer' onClick={() => setAmount(10000)}>
                                    <span className='text-[gray] font-semibold text-[1.2rem] '>₹</span>
                                    <span className='text-[#367ff6] font-semibold text-[1.3rem]'>10K</span>
                                </div> <div className='border border-[#374992] rounded-lg items-center flex gap-5 mx-2  justify-evenly cursor-pointer' onClick={() => setAmount(50000)}>
                                    <span className='text-[gray] font-semibold text-[1.2rem] '>₹</span>
                                    <span className='text-[#367ff6] font-semibold text-[1.3rem]'>50K</span>
                                </div> <div className='border border-[#374992] rounded-lg items-center flex gap-5 mx-2  justify-evenly cursor-pointer' onClick={() => setAmount(100000)}>
                                    <span className='text-[gray] font-semibold text-[1.2rem] '>₹</span>
                                    <span className='text-[#367ff6] font-semibold text-[1.3rem]'>100K</span>
                                </div>


                            </div>

                            <div className=' h-[2.5rem] border rounded-3xl flex items-center justify-evenly px-2 '>
                                <img className='w-[1.8rem]     ' src="https://img.icons8.com/?size=100&id=87785&format=png&color=056FEBBF" alt="" />
                                <input type="text"    value={!amount ? "" : amount} onChange={(e)=>setAmount(e.target.value)} className=' border-l   bg-transparent focus:outline-none outline-none ml-3 pl-3 w-full  border-gray-500 text-white text-[1.1rem]  ' placeholder='Please enter the amount' />

                            </div>
                            <p className={`${amount < 200 ? "block" : "hidden"} text-red-500 text-[0.7rem] font-semibold`}> Minimum deposit amount is ₹200 </p>
                        </>
                    )}


                    <button onClick={Deposithandleclick} disabled={disabled} className={` bg-blue-600 hover:bg-transparent  font-semibold    h-[2.5rem]  ${disabled ? "cursor-pointer" : "cursor-default"}  rounded-3xl border border-transparent  px-2 hover:border hover:border-[#8080809e] transition-all duration-300 `}> Deposit</button>

                </div>
                <div className='flex bg-[#2b3270] flex-col font-sans  text-white rounded-[20px]  p-5 gap-3 m-3  '>
                    <div className='flex  gap-3 items-center'>
                        <img className='w-[2rem] ' src="https://img.icons8.com/?size=100&id=44015&format=png&color=000000" alt="" />
                        <h1>Recharge instructions </h1>
                    </div>
                    <div className="p-6 max-w-md mx-auto border-[1px] border-[#6161ee9e]   rounded-xl shadow-md space-y-4">

                        <ul className="list-disc list-inside space-y-2 text-gray-400   text-sm  ">
                            <li>If the transfer time is up, please fill out the deposit form again.</li>
                            <li>If you have successfully completed the transaction, your funds will be credited to your wallet within half an hour to one hour.</li>
                            <li>The transfer amount must match the order you created, otherwise the money cannot be credited successfully.</li>
                            <li>If you transfer the wrong amount, our company will not be responsible for the lost amount!</li>
                            <li>Note: do not cancel the deposit order after the money has been transferred.</li>
                        </ul>
                    </div>

                </div>

               

                <div className='h-[5rem]'></div>


            </div>
        </div>

    )
}

export default Recharge;