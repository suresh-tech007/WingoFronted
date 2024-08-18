import React, { useEffect, useState } from 'react';
import Depocart from '../cart/Depocart';
import { useSelector } from 'react-redux';
import Loading from '../component/Loading';
import { useNavigate } from 'react-router-dom';

const Deposithistory = () => {
    
    
    const {deposithistory,loading} = useSelector((state) => state.payment);
    const navigate = useNavigate();

    const backhandle = ()=>{
        navigate("/profile")
    }

  

     

    return (
        <div className={`flex relative   w-full h-full   items-center justify-center bg-gray-400`}>
           
                   
            <div className={`bg-[#22275b] pt-[3rem] ${ !deposithistory || deposithistory.length < 3 ? "h-screen" : "h-full"}     max-w-full   w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]    `}>
            {loading && <Loading />}
            <div className=' fixed top-0 bg-[#22275b] w-[400px]  p-4 flex text-white items-center  font-semibold text-[1.1rem] gap-1'>
                        <img onClick={backhandle} className='w-[2rem] cursor-pointer' src="https://img.icons8.com/?size=100&id=85099&format=png&color=D9E2F299" alt="back" />
                        <h1 className='ml-6'> Deposit history</h1>
                    </div>
               
                   <div className='pt-5 '>
                   {!deposithistory ||  deposithistory.length === 0 ? (
                    
                       <div className='    flex items-center  flex-col justify-center  '>
                        <img src="https://img.icons8.com/?size=100&id=rW2jdHbrzMDM&format=png&color=000000" alt="" />
                         <h1 className="text-[#80808093] font-poppins text-center mt-10">No deposithistory</h1>

                         </div>
                    ) : (
                        deposithistory && deposithistory.map((data) => (
                           <Depocart key={data._id} task={deposithistory.task}   data={data} />
                        ))
                    )}
                   </div>
                   <div className='h-[100px]'></div>
                </div>
            </div>
         
    );
     

   
};

export default Deposithistory;
