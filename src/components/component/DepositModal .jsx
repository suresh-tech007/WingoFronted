import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdCloseCircleOutline } from "react-icons/io";


const DepositCard = ({ amount, bonus, deposited, maxDeposit ,setDepositModel}) => {
  const navigate = useNavigate();


    const handleSubitbutton = ()=>{
     
      navigate("/deposit", {
        state: {
            amount,  
        }
    })
    setDepositModel(false)
    

        
    }
  return (
    <div className="bg-[#1c1f32] text-white p-4 rounded-lg mb-4">
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">First deposit <span className="text-yellow-500">{amount}</span></span>
        <span className="text-green-500 font-bold">+ {bonus}</span>
      </div>
      <p className="text-sm mt-2">Deposit {amount} for the first time and you will receive {bonus} bonus</p>
      <div className="w-full bg-gray-800 rounded-full h-4 mt-2">
        <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${(deposited / maxDeposit) * 100}%` }}></div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span>{deposited}/{maxDeposit}</span>
        <button onClick={()=>handleSubitbutton(amount)} className="bg-blue-500 text-white py-1 px-3 rounded-full">Deposit</button>
      </div>
    </div>
  );
};

const DepositModal = ({setDepositModel}) => {
    const [disbled,setDisbled] = useState(false)

    const settimerdeopsitmodel = ()=>{
        
        setDepositModel(false)
        const now = new Date();
        const item = {
            value: 86400 ,
            expiry: now.getTime() + 86400 ,
        };
        localStorage.setItem("timeredepositmodel", JSON.stringify(item));
    }

  const deposits = [
    { amount: 10000, bonus: 800, deposited: 0, maxDeposit: 10000 },
    { amount: 5000, bonus: 500, deposited: 0, maxDeposit: 5000 },
    { amount: 1000, bonus: 200, deposited: 0, maxDeposit: 1000 },
    { amount: 500, bonus: 100, deposited: 0, maxDeposit: 500 },
    { amount: 200, bonus: 10, deposited: 0, maxDeposit: 200 },
  ];

  const setchecked = (e)=>{
  
           setDisbled((prev)=>!prev)
     
  }

  return (
  <div className='flex items-center justify-center  bg-[#0000007d] py-[3rem] flex-col h-[100vh] w-[100vw] fixed top-0  right-[0]  z-[100]'>
      <div className="bg-[#374992]  h-[90%]         w-[350px] text-white rounded-lg shadow-lg p-4">
      <h2 className="text-lg text-center font-bold mb-4">Extra first deposit bonus</h2>
      <p className="text-sm mb-4">Each account can only receive rewards once</p>
      <div className="overflow-y-auto h-[70%]">
        {deposits.map((deposit, index) => (
          <DepositCard setDepositModel={setDepositModel} key={index} {...deposit} />
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center h-[5vh]   ">
        <label className="flex items-center space-x-2">
          <input type="checkbox" onChange={(e)=>setchecked(e)} className="form-checkbox text-blue-600" />
          <span>No more reminders today</span>
        </label>
        <button disabled={!disbled}  onClick={()=>settimerdeopsitmodel()} className="bg-blue-500 text-white py-1 px-4 rounded-full">Activity</button>
      </div>
   
    </div>
    <div className='flex items-center justify-center w-full  pt-3 rounded-full '>
    <button onClick={()=>setDepositModel(false)} className="      rounded-full"><IoMdCloseCircleOutline  className='text-[3rem]' /></button>
    </div>
    </div>
  );
};

export default DepositModal;
