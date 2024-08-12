import React, { useState } from 'react';
import Depocart from '../cart/Depocart';

const Deposithistory = () => {
    const depodata = [
        {
            task:"deposit",
            balance: "200",
            Type: "7Days-Paytm x QR",
            Time: "July 05, 2024, 11:52:34",
            orderNumber: "Pt2024072807531989624491",
            status:"Failed"
        },
        
        {
            task:"deposit",
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
            orderNumber: "Pt20240728075319896dfaf24494",
            status:"Success"
        },
        {
            task:"deposit",
            balance: "500",
            Type: "7Days-Paytm x QR",
            Time: "July 30, 2034, 11:52:34",
            orderNumber: "Pt202407280dfasf7531989624494",
            status:"Success"
        },
        {
            task:"deposit",
            balance: "500",
            Type: "7Days-Paytm x QR",
            Time: "July 30, 2034, 11:52:34",
            orderNumber: "Pt2024072807531989624fdasfa494",
            status:"Success"
        },
    ];

    const [pamentstatus, setPamentstatus] = useState("Success");

     

    return (
        <div className={`flex relative  ${depodata.length<=3 ?"h-screen " : "h-full"}  items-center justify-center bg-gray-400`}>
            
                   
            <div className={`bg-[#22275b] pt-[3rem] ${depodata.length<=3 ?"h-screen " : "h-full"}   w-[400px]  `}>
            <div className=' fixed top-0 bg-[#22275b] w-[400px]  p-4 flex text-white items-center font-semibold text-[1.1rem] gap-1'>
                        <img className='w-[2rem]' src="https://img.icons8.com/?size=100&id=AbrQV4ddrXNz&format=png&color=000000" alt="" />
                        <h1>Deposit history</h1>
                    </div>
               
                   <div className='pt-3'>
                   {depodata.length === 0 ? (
                    
                       <div className='  h-full flex items-center justify-center  '>
                         <h1 className="text-white font-bold text-center mt-10">No transactions</h1>

                         </div>
                    ) : (
                        depodata.map((data, index) => (
                           <Depocart key={data.orderNumber}  data={data} />
                        ))
                    )}
                   </div>
                <div className='h-[100px]'></div>
                </div>
            </div>
         
    );
};

export default Deposithistory;
