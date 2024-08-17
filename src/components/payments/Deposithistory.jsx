import React, { useEffect, useState } from 'react';
import Depocart from '../cart/Depocart';
import { useSelector } from 'react-redux';

const Deposithistory = () => {
    
    
    const {deposithistory} = useSelector((state) => state.payment);

     

  

     

     

    return (
        <div className={`flex relative   ${deposithistory && deposithistory.length<=3 ?"h-screen " : "h-full"}  items-center justify-center bg-gray-400`}>
            
                   
            <div className={`bg-[#22275b] pt-[3rem] ${ deposithistory && deposithistory.length<=3 ?"h-screen " : "h-full"} w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]    `}>
            <div className=' fixed top-0 bg-[#22275b] w-[400px]  p-4 flex text-white items-center font-semibold text-[1.1rem] gap-1'>
                        <img className='w-[2rem]' src="https://img.icons8.com/?size=100&id=AbrQV4ddrXNz&format=png&color=000000" alt="" />
                        <h1>Deposit history</h1>
                    </div>
               
                   <div className='pt-3'>
                   {deposithistory && deposithistory.length === 0 ? (
                    
                    <div className='    flex items-center  flex-col justify-center mt-[3rem]  '>
                    <img src="https://img.icons8.com/?size=100&id=rW2jdHbrzMDM&format=png&color=000000" alt="" />
                     <h1 className="text-[#80808093] font-poppins text-center mt-4">No transactions</h1>

                     </div>
                    ) : (deposithistory &&
                        deposithistory.map((data, index) => (
                           <Depocart task={"Deposit"} key={data._id}  data={data} />
                        ))
                    )}
                   </div>
                <div className='h-[100px]'></div>
                </div>
            </div>
         
    );
};

export default Deposithistory;
