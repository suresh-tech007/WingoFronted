import React, { useState } from 'react';
import Depocart from '../cart/Depocart';
import { useSelector } from 'react-redux';
 

const Withdrawhistory = () => {
    
    const {withdrawhistory} = useSelector((state) => state.payment);

    

    return (
        <div className={`flex relative  ${withdrawhistory &&withdrawhistory.length <=3 && "h-full "  }  items-center justify-center bg-gray-400`}>
            
                   
            <div className={`bg-[#22275b] pt-[3rem]     w-[400px]  `}>
            <div className=' fixed top-0 bg-[#22275b] w-[400px]  p-4 flex text-white items-center font-semibold text-[1.1rem] gap-1'>
                        <img className='w-[2rem]' src="https://img.icons8.com/?size=100&id=AbrQV4ddrXNz&format=png&color=000000" alt="" />
                        <h1>withdraw history</h1>
                    </div>
               
                   <div className='pt-5 '>
                   {withdrawhistory && withdrawhistory.length === 0 ? (
                    
                       <div className='    flex items-center  flex-col justify-center mt-[2rem]  '>
                        <img src="https://img.icons8.com/?size=100&id=rW2jdHbrzMDM&format=png&color=000000" alt="" />
                         <h1 className="text-[#80808093] font-poppins text-center mt-4">No transactions</h1>

                         </div>
                    ) : (withdrawhistory &&
                        withdrawhistory.map((data, index) => (
                           <Depocart key={data._id}  data={data} task={"Withdraw"} />
                        ))
                    )}
                   </div>
                   <div className='h-[100px]'></div>
                </div>
            </div>
         
    );
};

 


export default Withdrawhistory;