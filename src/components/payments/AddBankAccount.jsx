import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addbankdetails, clearErrors } from '../../redux/actions/PaymentAciton';
import { toast } from 'react-toastify';

const AddBankAccount = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { message,error } = useSelector((state) => state.payment);
    const [bankdetals, setBankdetals] = useState({
        bankName:"",
        Holder:"",
        accountNumber:"",
        phoneNumber:"",
        IFSCcode:""
    });
 
    const handleSave = () => {

        dispatch(addbankdetails(bankdetals))
        
        
         
    };


    const onchnagehandler = (e)=>{
        const {name,value} = e.target
        setBankdetals((prev)=>({
            ...prev,
            [name]:value

        }))


    }
    useEffect(()=>{
        if(message){
            toast.success(message)
            dispatch(clearErrors())
            navigate("/wallet/withdraw")

        }
        
        if(error){
            console.log(error)
            toast.error(error)
            dispatch(clearErrors())
            navigate("/wallet/withdraw")
        }

    },[error,message])

    return (
        <div className="flex relative h-screen   items-center justify-center      max-h-full    bg-gray-400">

            <div className="      bg-[#22275b]   pt-[3rem]     w-[400px]   h-screen    ">
                <div className="flex flex-col items-center     rounded-lg   mx-4 mt-4 text-white">
                    <div className='text-white    items-center justify-center  flex  fixed top-0   w-[400px]   h-[3rem] bg-[#2b3270]'>


                        <h2 className="text-lg font-sarif font-medium  ">Add a bank account number</h2>
                    </div>

                    <p className="text-red-500 text-[0.7rem] font-semibold bg-[#2b3270] border rounded-3xl p-2  mb-6">To ensure the safety of your funds, please bind your bank account</p>
                    <div className="w-full mb-4">
                        <label className="block mb-2  font-bold text-[0.9rem]">Choose a bank</label>
                        <select
                            className="w-full p-2 rounded bg-[#2b3270] text-white"
                            value={bankdetals.bankName}
                            name='bankName'
                            onChange={(e) => onchnagehandler(e)}
                            >
                            <option value="" disabled>Please select a bank</option>
                            <option value="Bank of Baroda">Bank of Baroda</option>
                            <option value="Union Bank of India">Union Bank of India</option>
                            <option value="Central Bank of India">Central Bank of India</option>
                            <option value="Yes Bank">Yes Bank</option>
                            <option value="HDFC Bank">HDFC Bank</option>
                            <option value="Standard Chartered Bank">Standard Chartered Bank</option>
                            <option value="IDBI Bank">IDBI Bank</option>
                            <option value="Bank of India">Bank of India</option>
                            <option value="Punjab National Bank">Punjab National Bank</option>
                            <option value="ICICI Bank">ICICI Bank</option>
                            <option value="Canara Bank">Canara Bank</option>
                            <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                            <option value="State Bank of India">State Bank of India</option>
                            <option value="Indian Bank">Indian Bank</option>
                            <option value="Axis Bank">Axis Bank</option>
                            <option value="Rajasthan Marudhara Gramin Bank">Rajasthan Marudhara Gramin Bank</option>
                        </select>
                    </div>
                    <div className="w-full mb-4">
                        <label className="block mb-2  font-bold text-[0.9rem]">Full recipient's name</label>
                        <input
                            type="text"
                            className="w-full p-2 rounded  bg-[#2b3270] focus:outline-none focus:bg-[#2b3270] text-white"
                            placeholder="Please enter the recipient's name"
                            value={bankdetals.Holder}
                            name='Holder'
                            onChange={(e) => onchnagehandler(e)}
                        />
                    </div>
                    <div className="w-full mb-4">
                        <label className="block mb-2  font-bold text-[0.9rem]">Bank account number</label>
                        <input
                            type="text"
                           className="w-full p-2 rounded  bg-[#2b3270] focus:outline-none focus:bg-[#2b3270] text-white"
                            placeholder="Please enter your bank account number"
                           value={bankdetals.accountNumber}
                           name='accountNumber'
                           onChange={(e) => onchnagehandler(e)}
                        />
                    </div>
                    <div className="w-full mb-4">
                        <label className="block mb-2  font-bold text-[0.9rem]">Phone number</label>
                        <input
                            type="text"
                           className="w-full p-2 rounded  bg-[#2b3270] focus:outline-none focus:bg-[#2b3270] text-white"
                            placeholder="Please enter your phone number"
                            value={bankdetals.phoneNumber}
                           
                            name='phoneNumber'
                            onChange={(e) => onchnagehandler(e)}
                        />
                    </div>
                    <div className="w-full mb-6">
                        <label className="block mb-2  font-bold text-[0.9rem]">IFSC code</label>
                        <input
                            type="text"
                           className="w-full p-2 rounded  bg-[#2b3270] focus:outline-none focus:bg-[#2b3270] text-white"
                            placeholder="Please enter IFSC code"
                            value={bankdetals.IFSCcode}
                            
                            name='IFSCcode'
                            onChange={(e) => onchnagehandler(e)}
                        />
                    </div>
                    <button
                        className="bg-[#36c6da] transition-all duration-300 hover:bg-[#6d6df5]   py-2 px-4 rounded-3xl w-full text-white font-bold"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddBankAccount;
