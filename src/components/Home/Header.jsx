import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [selected , setSelected] = useState(false)
    return (
        <div className={`flex   z-20    items-center justify-center      max-h-full    bg-gray-400`}>

            <div
                className='fixed bottom-0      flex items-center   transition-all duration-300  h-[4rem]   w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px] justify-between px-5   bg-[#0a1846] text-[0.9rem]  '>
                <Link to={"/Home"} className={` transition-all duration-300  flex items-center  flex-col ${selected=="Home" ?" text-blue-500 " :" text-[#aca8a8c0]" }`} onClick={()=>setSelected("home")}>
                    <img className='w-[1.4rem]' src={`https://img.icons8.com/?size=100&id=kzcQaYg7aTjb&format=png&color=${selected=="home" ?"61a9ff" :"aca8a8c0" }`} alt="Home" />
                    <p>Home</p>
                </Link>
               
                <Link  onClick={()=>setSelected("activity")} to={"/activity"} className={` transition-all duration-300 flex items-center  flex-col ${selected =="activity"?" text-blue-500 " :" text-[#aca8a8c0]" }`}>
                    <img className='w-[1.4rem]' src={`https://img.icons8.com/?size=100&id=59049&format=png&color=${selected=="activity" ?"61a9ff" :"aca8a8c0" }`} alt="Deposit" />
                    <p>Activity</p>
                </Link>
                <Link  onClick={()=>setSelected("wallet")} to={"/wallet"} className={` transition-all duration-300 flex items-center  flex-col ${selected=="wallet" ?" text-blue-500 " :" text-[#aca8a8c0]" }`}>
                    <img className='w-[1.4rem]' src={`https://img.icons8.com/?size=100&id=yKpKytomTHlC&format=png&color=${selected=="wallet" ?"61a9ff" :"aca8a8c0" }`} alt="Wallet" />
                    <p>Wallet</p>
                </Link>
                <Link  onClick={()=>setSelected("profile")} to={"profile"} className={` transition-all duration-300 flex items-center  flex-col ${selected=="profile" ?" text-blue-500 " :" text-[#aca8a8c0]" }`} >
                    <img className='w-[1.6rem]' src={`https://img.icons8.com/?size=100&id=43383&format=png&color=${selected=="profile" ?"61a9ff" :"aca8a8c0" }`} alt="Profile" />
                    <p>Profile</p>
                </Link>
            </div>
        </div>
    )
}

export default Header