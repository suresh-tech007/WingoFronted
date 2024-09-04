import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import diposithis from "../../iamges/rechargeHistory.png";
import diposit from "../../iamges/depositicon.png";
import withdrawicon from "../../iamges/widthdrawBlue.png";
import withdrawhistory from "../../iamges/withdrawHistory.png"
import Depocart from '../cart/Depocart';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { walletbalance } from '../../redux/actions/PaymentAciton';
 
const Wallet = () => {
    const dispatch = useDispatch()
    const { depositBalance, withdrawableBalance} = useSelector((state) => state.payment);
    const { transactions } = useSelector((state) => state.payment);
    const [rupees, setRupees] = useState(null);
    
    const [walletbalances,setWalletbalances] = useState(null)
     const navigate = useNavigate();
        
     
        
        const reloadhanlde =()=>{
            navigate("/wallet")
             
        }
        
         
        
       useEffect(()=>{
        dispatch(walletbalance())
 
       
       
    if (depositBalance !==null && withdrawableBalance !== null) {
        setWalletbalances( withdrawableBalance +  depositBalance)
      }
       
       },[rupees,withdrawableBalance, depositBalance])
    
    return (

        <div className={`flex relative   items-center justify-center   min-h-screen      h-full    bg-gray-400`}>

            <div className={`  bg-[#22275b]   pt-[3rem]   min-h-screen    w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]    `}>
                <div className='text-white  flex items-center fixed top-0    w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]  justify-between px-3 h-[3rem] bg-[#2b3270]'>
                    <Link to={"/wallet"}><img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=40217&format=png&color=FBFBFB" alt="" /></Link>
                     
                        <h1 className=' pr-[10rem] font-semibold text-[1.1rem]'>Wallet</h1>
                        
                    
                </div>

                <div className='  ' >
                    <div className='bg-gradient-to-r from-teal-400  to-blue-500     rounded-[20px] m-3 p-5 text-white flex  flex-col justify-between   '>
                        <div className='flex   items-center gap-3  '>
                            <img className='  h-[2rem]' src="https://img.icons8.com/?size=100&id=LxhmnBiCAvFS&format=png&color=000000" alt="" />
                            <p> Balance </p>
                        </div>
                        <div className='flex  gap-2 items-center'>
                            <h2 className='text-start font-bold font-sans text-[1.6rem]  '>₹ { depositBalance !==null  && walletbalances !==null && walletbalances > 0 ? walletbalances : "0.00"}</h2>
                            <button onClick={reloadhanlde} ><img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=1742&format=png&color=FFFFFFCC" alt="reload" /></button>
                        </div>
                        <div className='flex  items-center justify-between'>
                            <img className='h-[3.5rem]' src="https://img.icons8.com/?size=100&id=XvUO8tVlSEL4&format=png&color=000000" alt="" />
                            <span>***</span>
                        </div>
                    </div>
                </div>

             

                <div className='flex bg-[#2b3270] flex-col font-sans  text-white rounded-[20px]  p-5 gap-3 m-3  '>
                    
                     
                    <div className='grid grid-cols-4  gap-6    p-5  text-nowrap   text-[0.8rem] font-medium  text-[#cbc4c4] items-center justify-around'>
                        <Link to={"deposit"} className='   cursor-pointer flex items-center flex-col   h-[5rem]'>
                            <img className='w-[3rem]'  src={diposit} alt="deposit" />
                            <p>Deposit   </p>
                        </Link>
                        <Link to={"withdraw"} className='   cursor-pointer flex items-center flex-col   h-[5rem]'>
                        <img className='w-[3rem]'  src={withdrawicon} alt="withdraw" />
                            <p>Withdraw   </p>
                        </Link>
                        <Link  to={"/deposithistory"} className='  cursor-pointer  flex items-center flex-col   h-[5rem]'>
                        <img className='w-[3rem]' src={diposithis} alt="deposit-history" />
                            <p className='text-wrap text-center '> deposit history </p>
                        </Link>
                        <Link to={"/withdrawalhistory"} className='  cursor-pointer  flex items-center flex-col   h-[5rem]'>
                        <img className='w-[3rem]'  src={withdrawhistory} alt="withdraw history" />
                            <p className='text-wrap text-center '> withdraw history</p>
                        </Link>
                         
                    </div>
                    
                        
                     
                </div>
                

                <div >
                    <div className='p-4 flex text-white items-center font-semibold text-[1.1rem] gap-1'>
                        <img className='w-[2rem]' src="https://img.icons8.com/?size=100&id=AbrQV4ddrXNz&format=png&color=000000" alt="" />
                        <h1>transaction  history</h1>
                    </div>
                    {!transactions || transactions.length === 0 ? (
                   
                   <div className='    flex items-center  h-[30rem] flex-col justify-center  '>
                   <img src="https://img.icons8.com/?size=100&id=rW2jdHbrzMDM&format=png&color=000000" alt="" />
                    <h1 className="text-[#80808093] font-poppins text-center mt-10">No transactions</h1>

                    </div>
                 ) : (transactions && 
                    transactions.map((data, index) => (
                        
                        <Depocart key={data._id} data={data} />
                     ))
                 )}
                </div>
                


            </div>
        </div>

    )
}

export default Wallet;