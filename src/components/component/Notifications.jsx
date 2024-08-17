import React, { useState } from 'react';
import Depocart from '../cart/Depocart';
import Notification from '../cart/Notification';
 

const Notifications = () => {
    const depodata = [
        {
            Type:"LOGIN NOTIFICATION",
            Time: "2024-07-30  11:52:34 ",
            message: "Yout account is logged in  2024-07-30  11:52:34 "
        },
        {
            Type:"LOGIN NOTIFICATION",
            Time: "July 05, 2024, 11:52:34",
            message: "Yout account is logged in  2024-07-30  11:52:34 "
        },
        {
            Type:"LOGIN NOTIFICATION",
            Time: "July 05, 2024, 11:52:34",
            message: "Yout account is logged in  2024-07-30  11:52:34 "
        },
        {
            Type:"LOGIN NOTIFICATION",
            Time: "July 05, 2024, 11:52:34",
            message: "Yout account is logged in  2024-07-30  11:52:34 "
        },
         

    ];

   

   

    return (
        <div className={`flex relative  ${depodata.length<=7 ?"h-screen " : "h-full"}  items-center justify-center bg-gray-400`}>
            
                   
            <div className={`bg-[#22275b] pt-[3rem] ${depodata.length<=7 ?"h-screen " : "h-full"}   w-full   max-w-full md:w-[400px]  `}>
            <div className=' fixed top-0 bg-[#22275b] w-[400px]  p-4 flex text-white items-center font-semibold text-[1.1rem] gap-1'>
                        <img className='w-[2rem]' src="https://img.icons8.com/?size=100&id=AbrQV4ddrXNz&format=png&color=000000" alt="" />
                        <h1>Notification</h1>
                    </div>
               
                   <div className='pt-5 '>
                   {depodata.length === 0 ? (
                    
                       <div className='    flex items-center  flex-col justify-center  '>
                        <img src="https://img.icons8.com/?size=100&id=rW2jdHbrzMDM&format=png&color=000000" alt="" />
                         <h1 className="text-[#80808093] font-poppins text-center mt-10">No transactions</h1>

                         </div>
                    ) : (
                        depodata.map((data, index) => (
                           <Notification index={index} key={index} data={data} />
                        ))
                    )}
                   </div>
                <div className='h-[100px]'></div>
                </div>

            </div>
         
    );
};

 



export default Notifications;