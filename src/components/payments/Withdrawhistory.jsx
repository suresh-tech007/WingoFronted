import React, { useEffect, useState } from 'react';
import Depocart from '../cart/Depocart';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../component/Loading';
import { withdrawhistory } from '../../redux/actions/PaymentAciton';
 

const Withdrawhistory = () => {
    
    const { withdrawhistory : WithdrawHistory  ,loading} = useSelector((state) => state.payment);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(withdrawhistory())
    },[dispatch])

    

    return (
        <div className={`flex relative   w-full h-full   items-center justify-center bg-gray-400`}>
        
        <div className={`bg-[#22275b] pt-[3rem] ${ !WithdrawHistory || WithdrawHistory.length < 3 ? "h-screen" : "h-full"}     max-w-full   w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]    `}>
            
                   
            <div className={`bg-[#22275b] pt-[3rem]     w-[400px]  `}>
                {loading && <Loading />}
            <div className=' fixed top-0 bg-[#22275b] w-[400px]  p-4 flex text-white items-center font-semibold text-[1.1rem] gap-1'>
                        <img className='w-[2rem]' src="https://img.icons8.com/?size=100&id=AbrQV4ddrXNz&format=png&color=000000" alt="" />
                        <h1>withdraw history</h1>
                    </div>
               
                   <div className='pt-5 '>
                   {WithdrawHistory && WithdrawHistory.length === 0 ? (
                    
                       <div className='    flex items-center  flex-col justify-center mt-[2rem]  '>
                        <img src="https://img.icons8.com/?size=100&id=rW2jdHbrzMDM&format=png&color=000000" alt="" />
                         <h1 className="text-[#80808093] font-poppins text-center mt-4">No transactions</h1>

                         </div>
                    ) : (WithdrawHistory &&
                        WithdrawHistory.map((data, index) => (
                           <Depocart key={data._id}  data={data} task={"Withdraw"} />
                        ))
                    )}
                   </div>
                   <div className='h-[100px]'></div>
                </div>
            </div>
            </div>
         
    );
};

 


export default Withdrawhistory;