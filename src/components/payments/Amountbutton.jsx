import React from 'react'

const Amountbutton = ({USTD,setAmount}) => {
  return (
    <div className='grid grid-cols-3 gap-4'>
    <div className='border border-[#374992] rounded-lg items-center flex mx-2 justify-evenly cursor-pointer' onClick={() => setAmount(10)}>
        <span className='text-[gray] font-semibold text-[1.2rem]'>
            <img className='w-[1.2rem]' src={USTD} alt="" />
        </span>
        <span className='text-[#367ff6] font-semibold text-[1.3rem]'>10</span>
    </div>
    <div className='border border-[#374992] rounded-lg items-center flex mx-2 justify-evenly cursor-pointer' onClick={() => setAmount(50)}>
        <span className='text-[gray] font-semibold text-[1.2rem]'>
            <img className='w-[1.2rem]' src={USTD} alt="" />
        </span>
        <span className='text-[#367ff6] font-semibold text-[1.3rem]'>50</span>
    </div>
    <div className='border border-[#374992] rounded-lg items-center flex mx-2 justify-evenly cursor-pointer' onClick={() => setAmount(100)}>
        <span className='text-[gray] font-semibold text-[1.2rem]'>
            <img className='w-[1.2rem]' src={USTD} alt="" />
        </span>
        <span className='text-[#367ff6] font-semibold text-[1.3rem]'>100</span>
    </div>
    <div className='border border-[#374992] rounded-lg items-center flex mx-2 justify-evenly cursor-pointer' onClick={() => setAmount(200)}>
        <span className='text-[gray] font-semibold text-[1.2rem]'>
            <img className='w-[1.2rem]' src={USTD} alt="" />
        </span>
        <span className='text-[#367ff6] font-semibold text-[1.3rem]'>200</span>
    </div>
    <div className='border border-[#374992] rounded-lg items-center flex mx-2 justify-evenly cursor-pointer' onClick={() => setAmount(500)}>
        <span className='text-[gray] font-semibold text-[1.2rem]'>
            <img className='w-[1.2rem]' src={USTD} alt="" />
        </span>
        <span className='text-[#367ff6] font-semibold text-[1.3rem]'>500</span>
    </div>
    <div className='border border-[#374992] rounded-lg items-center flex mx-2 justify-evenly cursor-pointer' onClick={() => setAmount(1000)}>
        <span className='text-[gray] font-semibold text-[1.2rem]'>
            <img className='w-[1.2rem]' src={USTD} alt="" />
        </span>
        <span className='text-[#367ff6] font-semibold text-[1.3rem]'>1K</span>
    </div>
</div>
  )
}

export default Amountbutton