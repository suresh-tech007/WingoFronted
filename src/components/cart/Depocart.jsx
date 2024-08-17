import React from 'react'
import { toast } from 'react-toastify';

const Depocart = ({data,task}) => {
 
    const copyToClipboard = (ordernum) => {
        navigator.clipboard.writeText(ordernum).then(() => {
            toast.success('Text copied to clipboard');
        }).catch(err => {
            toast.error('Failed to copy: ', err);
        });
    };
    
const dateObject = new Date(data.createdAt);

 
const date = dateObject.toLocaleDateString();
const time = dateObject.toLocaleTimeString();

const dateTime = `${date} ${time}`;
  return (
    <div   className="m-3 p-4 bg-[#2b3270] rounded-xl shadow-md space-y-4">
    <div className='flex items-center border-b pb-4 border-[#6d6dc58a] justify-between'>
        <span className='font-sans font-medium text-white bg-green-500 px-3 py-1 rounded-lg'>{task ? task : data.task}</span>
        <span className={`font-serif font-semibold ${data.status === "Failed" ? "text-red-600" : "text-green-500"}`}>
            {data.status}
            
        </span>
    </div>
    <div className='flex text-gray-400 items-center justify-between text-[0.8rem] gap-2 flex-col'>
        <div className='flex justify-between items-center w-full'>
            <p>Balance</p>
            <span className='text-yellow-600'>₹{data.amount}.00</span>
        </div>
        <div className='flex justify-between items-center w-full'>
            <p>Type</p>
            <span>{data.way}</span>
        </div>
        <div className='flex justify-between items-center w-full'>
            <p>Time</p>
            <span>{dateTime}</span>
        </div>
        <div className='flex justify-between items-center w-full text-nowrap'>
            <p>Order Number</p>
            <div>
                <span>{data._id}</span>
                <button onClick={() => copyToClipboard(data._id)}>
                    <img className='w-[0.9rem] ml-1 mt-1' src="https://img.icons8.com/?size=100&id=86206&format=png&color=525C6A99" alt="" />
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Depocart