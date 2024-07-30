import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import paytm from "../../iamges/paytm.png";
import upi from "../../iamges/upiqr.png"
import all from "../../iamges/all.png"

const Recharge = () => {
    const [rupees, setRupees] = useState(null);
    const [way, setWay] = useState(null);
    const [disabled, setDisabled] = useState(null);
    const [pamentstatus, setPamentstatus] = useState("Success");
    const [ordernum, setOrdernum] = useState("Pt2024072807531989624491");
     const navigate = useNavigate();
        const copyToClipboard = (ordernum) => {
          navigator.clipboard.writeText(ordernum).then(() => {
            alert('Text copied to clipboard');
          }).catch(err => {
            console.error('Failed to copy: ', err);
          });
        };
        const Deposithandleclick=()=>{
          console.log(way,rupees)
            console.log("all ok " )
        }
        const reloadhanlde =()=>{
            navigate("/recharge")
            console.log("reaload")
        }

       useEffect(()=>{
        if(way==null || rupees==null){
            setDisabled(true)
        }else{
            setDisabled(false)
        }
       },[way,rupees])
    
    return (

        <div className="flex relative   items-center justify-center   h-full   max-h-full    bg-gray-400">

            <div className="      bg-[#22275b]   pt-[3rem]      md:w-[400px] w-screen      ">
                <div className='text-white  flex items-center fixed top-0   w-[400px] justify-between px-3 h-[3rem] bg-[#2b3270]'>
                    <Link to={"/wallet"}><img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=40217&format=png&color=FBFBFB" alt="" /></Link>
                    <div className='flex   gap-[4rem]'>
                        <h1>Deposit</h1>
                        <Link to={"/deposithistory"}>Deposit history</Link>
                    </div>
                </div>

                <div className='  ' >
                    <div className='bg-gradient-to-r from-teal-400  to-blue-500   h-[20vh] rounded-[20px] m-3 p-5 text-white flex  flex-col justify-between   '>
                        <div className='flex   items-center gap-3  '>
                            <img className='  h-[2rem]' src="https://img.icons8.com/?size=100&id=LxhmnBiCAvFS&format=png&color=000000" alt="" />
                            <p> Balance </p>
                        </div>
                        <div className='flex  gap-2 items-center'>
                            <h2 className='text-start font-bold font-sans text-[1.6rem]  '>₹200.00</h2>
                            <button onClick={reloadhanlde} ><img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=1742&format=png&color=FFFFFFCC" alt="reload" /></button>
                        </div>
                        <div className='flex  items-center justify-between'>
                            <img className='h-[3.5rem]' src="https://img.icons8.com/?size=100&id=XvUO8tVlSEL4&format=png&color=000000" alt="" />
                            <span>***</span>
                        </div>
                    </div>
                </div>

                <div className='     grid grid-cols-3 gap-3 p-4'>
                    <div className={` ${way=="paytmQR" ? "bg-gradient-to-r from-teal-400  to-blue-500  text-white ":"bg-[#2b3270] text-gray-400" } active:bg-blue-500     rounded-xl    flex flex-col  py-4 items-center `} onClick={()=>setWay("paytmQR")} >
                        <img src={paytm} className='w-[3rem]' alt=" paytm" />
                        <span className='text-[12px] font-light'>Paytm x QR</span>
                    </div>
                    <div className={` ${way=="EWallet" ? "bg-gradient-to-r from-teal-400  to-blue-500  text-white ":"bg-[#2b3270] text-gray-400" } active:bg-blue-500     rounded-xl    flex flex-col  py-4 items-center `} onClick={()=>setWay("EWallet")}>
                        <img src={all} className='w-[3rem]' alt="" />
                        <span className='text-[12px] font-light'>E-wallet</span>
                    </div>
                    <div className={` ${way=="upiqr" ? "bg-gradient-to-r from-teal-400  to-blue-500  text-white ":"bg-[#2b3270] text-gray-400" } active:bg-blue-500     rounded-xl    flex flex-col  py-4 items-center `} onClick={()=>setWay("upiqr")}>
                        <img src={upi} className='w-[3rem]' alt="" />
                        <span className='text-[12px] font-light'>UPI x QR</span></div>
                    <div className={` ${way=="another" ? "bg-gradient-to-r from-teal-400  to-blue-500  text-white ":"bg-[#2b3270] text-gray-400" } active:bg-blue-500     rounded-xl    flex flex-col  py-4 items-center `} onClick={()=>setWay("another")}>
                        <img src="https://img.icons8.com/?size=100&id=68067&format=png&color=000000" className='w-[3rem]' alt=" paytm" />
                        <span className='text-[12px] font-light'>Paytm x QR</span></div>
                    <div className={` ${way=="another2" ? "bg-gradient-to-r from-teal-400  to-blue-500  text-white ":"bg-[#2b3270] text-gray-400" } active:bg-blue-500     rounded-xl    flex flex-col  py-4 items-center `} onClick={()=>setWay("another2")}>
                        <img src="https://img.icons8.com/?size=100&id=68067&format=png&color=000000" className='w-[3rem]' alt=" paytm" />
                        <span className='text-[12px] font-light'>Paytm x QR</span>
                    </div>
                </div>

                <div className='flex bg-[#2b3270] flex-col font-sans  text-white rounded-[20px]  p-5 gap-3 m-3  '>
                    <div>

                        <h1>
                            Deposit amount
                        </h1>
                    </div>
                    <div className='grid grid-cols-3 gap-4 '>
                        <div className='border border-[#374992] rounded-lg items-center flex gap-5 mx-2  justify-evenly  cursor-pointer' onClick={()=>setRupees(200)} >
                            <span className='text-[gray] font-semibold text-[1.2rem] '>₹</span>
                            <span className='text-[#367ff6] font-semibold text-[1.3rem]'>200</span>
                        </div>
                        <div className='border border-[#374992] rounded-lg items-center flex gap-5 mx-2  justify-evenly cursor-pointer' onClick={()=>setRupees(500)}>
                            <span className='text-[gray] font-semibold text-[1.2rem] '>₹</span>
                            <span className='text-[#367ff6] font-semibold text-[1.3rem]'>500</span>
                        </div> <div className='border border-[#374992] rounded-lg items-center flex gap-5 mx-2  justify-evenly cursor-pointer' onClick={()=>setRupees(1000)}>
                            <span className='text-[gray] font-semibold text-[1.2rem] '>₹</span>
                            <span className='text-[#367ff6] font-semibold text-[1.3rem]'>1K</span>
                        </div> <div className='border border-[#374992] rounded-lg items-center flex gap-5 mx-2  justify-evenly cursor-pointer' onClick={()=>setRupees(10000)}>
                            <span className='text-[gray] font-semibold text-[1.2rem] '>₹</span>
                            <span className='text-[#367ff6] font-semibold text-[1.3rem]'>10K</span>
                        </div> <div className='border border-[#374992] rounded-lg items-center flex gap-5 mx-2  justify-evenly cursor-pointer' onClick={()=>setRupees(50000)}>
                            <span className='text-[gray] font-semibold text-[1.2rem] '>₹</span>
                            <span className='text-[#367ff6] font-semibold text-[1.3rem]'>50K</span>
                        </div> <div className='border border-[#374992] rounded-lg items-center flex gap-5 mx-2  justify-evenly cursor-pointer' onClick={()=>setRupees(100000)}>
                            <span className='text-[gray] font-semibold text-[1.2rem] '>₹</span>
                            <span className='text-[#367ff6] font-semibold text-[1.3rem]'>100K</span>
                        </div>


                    </div>
                    <div className=' w-[350px] h-[2.5rem] border rounded-3xl flex items-center justify-evenly px-2 '>
                        <img className='w-[2rem]     ' src="https://img.icons8.com/?size=100&id=87785&format=png&color=056FEBBF" alt="" />
                        <input type="text" value={rupees} className=' border-l  bg-transparent focus:outline-none outline-none ml-3 pl-3 w-full  border-gray-500 text-white text-[1.1rem]  ' placeholder='Please enter the amount' />
                        <img onClick={()=>setRupees("")} className='w-[2rem]  cursor-pointer ' src="https://img.icons8.com/?size=100&id=3062&format=png&color=8C919699" alt="" />
                    </div>
                    
                        <button onClick={Deposithandleclick} disabled={disabled}  className=' bg-blue-600 hover:bg-transparent  font-semibold  w-[350px] h-[2.5rem]   rounded-3xl border border-transparent  px-2 hover:border hover:border-[#8080809e] transition-all duration-300 '> Deposit</button>
                     
                </div>
                <div className='flex bg-[#2b3270] flex-col font-sans  text-white rounded-[20px]  p-5 gap-3 m-3  '>
                    <div className='flex  gap-3 items-center'>
                        <img className='w-[2rem] ' src="https://img.icons8.com/?size=100&id=44015&format=png&color=000000" alt="" />
                        <h1>Recharge instructions </h1>
                    </div>
                    <div className="p-6 max-w-md mx-auto border-[1px] border-[#6161ee9e]   rounded-xl shadow-md space-y-4">

                        <ul className="list-disc list-inside space-y-2 text-gray-400   text-sm  ">
                            <li>If the transfer time is up, please fill out the deposit form again.</li>
                            <li>The transfer amount must match the order you created, otherwise the money cannot be credited successfully.</li>
                            <li>If you transfer the wrong amount, our company will not be responsible for the lost amount!</li>
                            <li>Note: do not cancel the deposit order after the money has been transferred.</li>
                        </ul>
                    </div>

                </div>

                <div >
                    <div className='p-4 flex text-white items-center font-semibold text-[1.1rem] gap-1'>
                        <img className='w-[2rem]' src="https://img.icons8.com/?size=100&id=AbrQV4ddrXNz&format=png&color=000000" alt="" />
                        <h1>Deposit history</h1>
                    </div>
                    <div className=" m-3 p-4  bg-[#2b3270]     rounded-xl shadow-md space-y-4 ">
                        <div className='flex items-center border-b pb-4 border-[#6d6dc58a] justify-between'>
                            <span className=' font-sans  font-medium text-white bg-green-500 px-3 py-1 rounded-lg'>Deposit</span>
                            <span className={`text-red-600 font-serif   font-normal  ${pamentstatus=="Faild"?"text-red-600 ":"text-green-500"}`}   >{pamentstatus}</span>
                        </div>
                        <div className='flex text-gray-400 items-center justify-between text-[0.8rem] gap-2 flex-col'>
                        <div className='flex justify-between items-center w-full'>
                            <p>Balance</p>
                            <span className='text-yellow-600'>₹200.00</span>

                         </div>
                          <div className='flex justify-between items-center w-full'>
                            <p>Type</p>
                            <span>7Days-Paytm x QR</span>

                         </div>
                          <div className='flex justify-between items-center w-full'>
                            <p>Time</p>
                            <span>July 30, 2024, 11:52:34</span>

                         </div>
                          <div className='flex justify-between items-center w-full text-nowrap  '>
                            <p>Order Number</p>
                           <div>
                           <span value={ordernum}   >Pt2024072807531989624491 </span>
                           <button onClick={()=>copyToClipboard(ordernum)} ><img  className='w-[0.9rem] ml-1 mt-1 ' src="https://img.icons8.com/?size=100&id=86206&format=png&color=525C6A99" alt="" /></button>

                           </div>
                         </div>
                        </div>



                        </div>

                </div>


            </div>
        </div>

    )
}

export default Recharge;