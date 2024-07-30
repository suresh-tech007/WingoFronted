import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import diposithis from "../../iamges/rechargeHistory.png";
import diposit from "../../iamges/depositicon.png";
import withdrawicon from "../../iamges/widthdrawBlue.png";
import withdrawhistory from "../../iamges/withdrawHistory.png"
import Depocart from '../cart/Depocart';
 
const Wallet = () => {
    const [rupees, setRupees] = useState(null);
    const [way, setWay] = useState(null);
    const [disabled, setDisabled] = useState(null);
    const [pamentstatus, setPamentstatus] = useState("Success");
    const [ordernum, setOrdernum] = useState("Pt2024072807531989624491");
     const navigate = useNavigate();
        const copyToClipboard = (ordernum) => {
          navigator.clipboard.writeText(ordernum).then(() => {
            alert('Text copied to clipboard');
          }).catch(err => {
            console.error('Failed to copy: ', err);
          });
        };
        const Deposithandleclick=()=>{
          console.log(way,rupees)
            
        }
        const reloadhanlde =()=>{
            navigate("/wallet")
            console.log("reaload")
        }
        const withdrawhis = [
            {
                task:"withdraw",
                balance: "200",
                Type: "7Days-Paytm x QR",
                Time: "July 05, 2024, 11:52:34",
                orderNumber: "Pt2024072807531989624491",
                status:"Failed"
            },
            {
                 task:"deposit",
                balance: "300",
                Type: "7Days-Paytm x QR",
                Time: "July 30, 2024, 11:52:34",
                orderNumber: "Pt2024072807531989624492",
                status:"Failed"
            },
            {
                task:"withdraw",
                balance: "400",
                Type: "7Days-Paytm x QR",
                Time: "July 30, 2024, 11:52:34",
                orderNumber: "Pt2024072807531989624493",
                status:"Success"
            },
            {
                task:"withdraw",
                balance: "500",
                Type: "7Days-Paytm x QR",
                Time: "July 30, 2034, 11:52:34",
                orderNumber: "Pt2024072807531989624494",
                status:"Success"
            },
            {
                task:"deposit",
                balance: "500",
                Type: "7Days-Paytm x QR",
                Time: "July 30, 2034, 11:52:34",
                orderNumber: "Pt2024072807531989624494",
                status:"Success"
            },
        ];
        // const withdrawhis = []

       useEffect(()=>{
        if(way==null || rupees==null){
            setDisabled(true)
        }else{
            setDisabled(false)
        }
       },[way,rupees])
    
    return (

        <div className={`flex relative   items-center justify-center      max-h-full    bg-gray-400`}>

            <div className={`  bg-[#22275b]   pt-[3rem]   ${withdrawhis.length==0?"h-screen":"h-full"}     md:w-[400px] w-screen    `}>
                <div className='text-white  flex items-center fixed top-0   w-[400px] justify-between px-3 h-[3rem] bg-[#2b3270]'>
                    <Link to={"/wallet"}><img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=40217&format=png&color=FBFBFB" alt="" /></Link>
                     
                        <h1 className=' pr-[10rem] font-semibold text-[1.1rem]'>Wallet</h1>
                        
                    
                </div>

                <div className='  ' >
                    <div className='bg-gradient-to-r from-teal-400  to-blue-500   h-[20vh] rounded-[20px] m-3 p-5 text-white flex  flex-col justify-between   '>
                        <div className='flex   items-center gap-3  '>
                            <img className='  h-[2rem]' src="https://img.icons8.com/?size=100&id=LxhmnBiCAvFS&format=png&color=000000" alt="" />
                            <p> Balance </p>
                        </div>
                        <div className='flex  gap-2 items-center'>
                            <h2 className='text-start font-bold font-sans text-[1.6rem]  '>₹200.00</h2>
                            <button onClick={reloadhanlde} ><img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=1742&format=png&color=FFFFFFCC" alt="reload" /></button>
                        </div>
                        <div className='flex  items-center justify-between'>
                            <img className='h-[3.5rem]' src="https://img.icons8.com/?size=100&id=XvUO8tVlSEL4&format=png&color=000000" alt="" />
                            <span>***</span>
                        </div>
                    </div>
                </div>

             

                <div className='flex bg-[#2b3270] flex-col font-sans  text-white rounded-[20px]  p-5 gap-3 m-3  '>
                    
                    <div className='flex  text-nowrap gap-2 text-[0.8rem] font-medium  text-[#979595] items-center justify-around'>
                        <div className='   flex items-center flex-col'>
                             <span className='text-white font-medium text-[1rem]'>₹200.00</span>
                            <p>Deposit amount </p>
                        </div>
                        <div className='   flex items-center flex-col'>
                            <span className='text-white font-medium text-[1rem]'>₹400.00</span>
                            <p>Withdraw amount </p>
                        </div>
                        <div className='   flex items-center flex-col'>
                             <span className='text-white font-medium text-[1rem]'>₹200.00</span>
                            <p>benefit amount</p>
                        </div>
                         
                    </div>
                    <div className='grid grid-cols-4  gap-6    p-5  text-nowrap   text-[0.8rem] font-medium  text-[#cbc4c4] items-center justify-around'>
                        <Link to={"/deposit"} className='   cursor-pointer flex items-center flex-col   h-[5rem]'>
                            <img className='w-[3rem]'  src={diposit} alt="deposit" />
                            <p>Deposit   </p>
                        </Link>
                        <Link to={"/withdraw"} className='   cursor-pointer flex items-center flex-col   h-[5rem]'>
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
                    {withdrawhis.length === 0 ? (
                    
                    <div className='  h-full flex items-center justify-center  '>
                      <h1 className="text-white font-bold text-center mt-10">No transactions</h1>

                      </div>
                 ) : (
                     withdrawhis.map((data, index) => (
                        
                        <Depocart index={index} data={data} />
                     ))
                 )}
                </div>
                <div className='h-[90px]'></div>


            </div>
        </div>

    )
}

export default Wallet;