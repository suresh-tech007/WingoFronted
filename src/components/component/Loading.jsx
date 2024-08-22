import React from 'react'
import loding from "/download.png"

const Loading = () => {
  return (
    <div className='   absolute z-[100]         top-0 bottom-0    h-[100vh] max-w-[100%]   grid place-items-center '>
        
        
    <div className='flex items-center justify-center bg-[#00000021] h-full    w-[100vw]     '>
      <div className='w-[8vmax]  animate-spin      rounded-full   h-[8vmax]  '>
      <img  src={loding} alt="" />
      </div>
       
    </div>
    
    
    </div>
  )
}

export default Loading