import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { updateadminupi } from '../../redux/actions/AdminAction';
import Loading from '../component/Loading';
import { clearErrors, getUpiDetails } from '../../redux/actions/PaymentAciton';
import { toast } from 'react-toastify';

const DepositUpiChange = () => {
  const disptach = useDispatch()
  const {  message, loading} = useSelector((state) => state.Admins);
  const { upiId,walletId,  loading:loading2} = useSelector((state) => state.payment);
  const [formData, setFormData] = useState({
    upiId:   '',
    walletId:   '',
   
  });
   

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to the backend
    
   await disptach(updateadminupi(formData))
   await disptach(getUpiDetails())
    toast.success('Withdrawal request updated successfully!');
  };
  useEffect(()=>{
    disptach(getUpiDetails())
    if(message){
      toast.success(message)
      disptach(clearErrors())
    }
    if(upiId && walletId)
    {

      setFormData({
        ...formData,
        upiId: upiId,
        walletId:walletId

      });

    }


  },[disptach,message,upiId,walletId])
  
    return (
    <>
    {loading ||loading2 && <Loading /> }
      <div className=' flex h-screen w-full bg-[#060818] z-50 relative '>
      <Sidebar />
     
        <div className="max-w-md mx-auto bg-gray-900 p-6 rounded-lg w-[95%] text-white">
      <h2 className="text-2xl text-center font-bold mb-4">Update UPI'S</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="walletaddress">
            WALLET ADDRESS
          </label>
          <input
            type="text"
            id="walletaddress"
            name="walletId"
            placeholder='Enter wallet address'
            value={formData.walletId}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="upi">
          UPI ID 
          </label>
          <input
            type="text"
            id="upi"
            name="upiId"
            placeholder='Enter Upi Id'
            value={formData.upiId}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none"
            required
          />
        </div>

        

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update 
        </button>
      </form>
    </div>
        
   
    </div></>
    )
  
}

export default DepositUpiChange