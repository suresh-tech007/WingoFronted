import React from 'react'

const Notification = ({index,data}) => {
  return (
    <div key={index} className="m-3  px-3 py-1 bg-[#2b3270] h-full rounded-xl shadow-md   ">
    <div className='flex flex-col  gap-0'>
    <div className='flex   items-center  justify-between'>
        <p className='flex  items-center   text-white    '>
            <img  className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=jqapmoH5U4d0&format=png&color=000000" alt="noti" />
            <span className=' font-semibold ml-1 mt-2'>{data.Type}</span>
        </p>
       
        <button><img className='w-[2rem] mt-2'  src="https://img.icons8.com/?size=100&id=102350&format=png&color=000000" alt="delete" /></button>
    </div>
    <span className='text-gray-600 text-[0.8rem] mb-6  ml-1'>{data.Time}</span>
    </div>
    <div className='flex text-gray-400 items-center justify-between text-[0.8rem] gap-2 flex-col'>
        
       
        <div className='flex justify-between items-center ml-2 w-full'>
            <span>{data.message}</span>
        </div>
         
    </div>
</div>
  )
}

 

export default Notification;