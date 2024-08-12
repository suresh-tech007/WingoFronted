import React, { useState } from 'react';
import Depocart from '../cart/Depocart';
import { useNavigate } from 'react-router-dom';
 

const GameHistory = () => {
    const navigate = useNavigate();
    const depodata = [
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
            task:"Deposit",
            balance: "400",
            Type: "7Days-Paytm x QR",
            Time: "July 30, 2024, 11:52:34",
            orderNumber: "Pt20240728075319896244978787",
            status:"Success"
        },
         
    ];
    


    const backhandle = ()=>{
        navigate("/profile")
    }

    

    return (
        <div className={`flex relative  ${depodata.length<=3 ?"h-screen " : "h-full"}  items-center justify-center bg-gray-400`}>
            
                   
            <div className={`bg-[#22275b] pt-[3rem] ${depodata.length<=3?"h-screen " : "h-full"}   w-full   max-w-full md:w-[400px]  `}>
            <div className=' fixed top-0 bg-[#22275b] w-[400px]  p-4 flex text-white items-center  font-semibold text-[1.1rem] gap-1'>
                        <img onClick={backhandle} className='w-[2rem] cursor-pointer' src="https://img.icons8.com/?size=100&id=85099&format=png&color=D9E2F299" alt="back" />
                        <h1 className='ml-6'> Transaction history</h1>
                    </div>
               
                   <div className='pt-5 '>
                   {depodata.length === 0 ? (
                    
                       <div className='    flex items-center  flex-col justify-center  '>
                        <img src="https://img.icons8.com/?size=100&id=rW2jdHbrzMDM&format=png&color=000000" alt="" />
                         <h1 className="text-[#80808093] font-poppins text-center mt-10">No transactions</h1>

                         </div>
                    ) : (
                        depodata.map((data) => (
                           <Depocart  data={data} />
                        ))
                    )}
                   </div>
                   <div className='h-[100px]'></div>
                </div>
            </div>
         
    );
};

 


 

 

export default GameHistory;