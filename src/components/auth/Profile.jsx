import React, { useEffect, useState } from "react";
 
import depositeimg from "../../iamges/deposit.png"
import cardpay from "../../iamges/cardpayment.png"
import trahistory from "../../iamges/trahistory.png"
import withdraw from "../../iamges/withdraw.png"
import { IoMdWallet } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { GiWallet } from "react-icons/gi";
import { IoIosWallet } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import { toast } from "react-toastify";
import Loading from "../component/Loading";

const Profile = () => {
    const { isAuthenticated, user,message,loading } = useSelector((state) => state.user);
    const { withdrawableBalance,depositBalance,loading : Load } = useSelector((state) => state.payment);
    const [timeout,setTimeout] = useState(null)
    const [walletbalance , setWalletbalance ]= useState(null)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const image = "https://res.cloudinary.com/dhvvefbcj/image/upload/v1722595281/gametirngaclone/Profile_oqiu39.png"
     
    const hanldelogout = ()=>{

        dispatch(logout())
        toast("Logout successfully")

    }
    
    useEffect(()=>{
         
        if(user==null  ){
            
            navigate("/login")
        }
        if(user.createdAt){
            const timestamp = user.createdAt
            const date = new Date(timestamp).toISOString().split('T')[0];
            setTimeout(date)
        }
        if(withdrawableBalance , depositBalance){
            setWalletbalance( withdrawableBalance + depositBalance )
        }
        
    },[user,isAuthenticated,withdrawableBalance , depositBalance])
    return (
        <div className="flex relative    items-center justify-center          bg-gray-400">

            <div className=" py-8  pt-0  bg-[#22275b]       w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]        ">
            { (loading || Load) && <Loading />}
                <div className=" flex items-center    justify-center flex-col ">

                    <div className="flex  items-center justify-start   w-full pl-[2rem]  pt-9 pb-0 z-10  ">

                        <div className="rounded-full  h-[6rem] mr-5 flex z-10  items-center justify-center  w-[6rem]  overflow-hidden ">
                            <img src={user.avatar ? user.avatar  : image} alt="profile_pic" />
                        </div>
                        <div className="    text-white  text-[12px] z-10 ">
                            <div>{user.Username}</div>
                            <div>UID | {user.UID ? user.UID : "2345542"}</div>
                            <div>
                                <span>createdAt :</span> {user.createdAt ? timeout : "2024-08-03"}
                            </div>
                        </div>





                    </div>
                    <div className="  bg-[#374992]   text-white font-serif  flex  rounded-3xl p-5 m-5 mx-6 w-[95%] z-10  flex-col justify-evenly ">
                        <div className="">
                            <span className="text-gray-400 ">Total Amount</span>
                            <div className="mb-5">₹ {withdrawableBalance && depositBalance &&walletbalance >0 ?walletbalance : "0.00"}</div>
                        </div>

                        <div className="flex flex-row w-full gap-7 items-center  ">
                            <Link to="/wallet" className="flex cursor-pointer  items-center justify-center flex-col">
                                <IoMdWallet className="text-[#db5b4d]  text-[35px]   " />
                                <span>Wallet</span>
                            </Link>
                            <Link to="/wallet/deposit" className="flex cursor-pointer items-center justify-center flex-col">
                                <GiWallet className="text-[#afcd4e]  text-[35px] " />
                                <span>Deposit</span>
                            </Link>
                            <Link to="/wallet/withdraw" className="flex cursor-pointer  items-center justify-center flex-col">
                                <IoIosWallet className="text-[#3ec4cb]  text-[35px] " />

                                <span>Withdraw</span>
                            </Link>
                        </div>


                    </div>
                    <div className="grid grid-cols-2 gap-5 m-5 text-white ">
                        <Link  to={"/gamehistory"} className=" bg-slate-900 w-[170px] h-[80px] rounded-lg flex items-center  text-[10px]  p-2 gap-3" >
                            <div>
                                <img src={trahistory} alt="" className="w-[40px]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[0.8rem]">Game History</span>
                                <span className=" text-gray-400">My Game History</span>

                            </div>
                        </Link>
                        <Link to={"/transactionhistory"} className=" bg-slate-900 w-[170px] h-[80px] rounded-lg flex items-center  text-[10px]  p-2 gap-3" >
                            <div>
                                <img src={cardpay} alt="" className="w-[45px]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[0.8rem]">Transaction</span>
                                <span className=" text-gray-400">My transaction History</span>

                            </div>
                        </Link>
                        <Link  to={"/deposithistory"} className=" bg-slate-900 w-[170px] h-[80px] rounded-lg flex items-center  text-[10px]  p-2 gap-3" >
                            <div>
                                <img src={depositeimg} alt="" className="w-[40px]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[0.8rem]">Deposit</span>
                                <span className=" text-gray-400">My deposit History</span>

                            </div>
                        </Link>
                        <Link to={"/withdrawalhistory"} className=" bg-slate-900 w-[170px] h-[80px] rounded-lg flex items-center  text-[10px]  p-2 gap-3" >
                            <div>
                                <img src={withdraw} alt="" className="w-[40px]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[0.8rem]">Withdraw</span>
                                <span className=" text-gray-400">My withdraw History</span>

                            </div>
                        </Link>

                    </div>
                   
                    <div className=" bg-[#2b3270]    text-white  font-sans    flex  rounded-3xl  px-5 m-5 mx-6 w-[95%]    flex-col justify-evenly">
                        <h1 className=" font-poppins">Service center</h1>
                        <div className="grid   grid-cols-3  gap-5     ">


                            <Link to={"/settings"} className="flex items-center flex-col  text-[0.9rem] text-gray-500 text-center ">
                                <img src="https://img.icons8.com/?size=100&id=104952&format=png&color=000000" className="w-[2rem]" alt="" />
                                <span>Settings</span>
                            </Link>
                            <Link to={"/feedback"} className="flex items-center flex-col  text-[0.9rem] text-gray-500 text-center">
                                <img src="https://img.icons8.com/?size=100&id=13823&format=png&color=000000" className="w-[2rem]" alt="" />
                                <span>Feedback</span>
                            </Link>


                            <Link to={"/notifications"} className="flex items-center flex-col  text-[0.9rem] text-gray-500 text-center">
                                <img src="https://img.icons8.com/?size=100&id=3tujsbSLnYkN&format=png&color=000000" className="w-[2rem]" alt="" />
                                <span>Notification</span>
                            </Link>

                            <Link to={"/services"} className="flex items-center   text-[0.9rem] text-gray-500   flex-col text-center">
                                <img src="https://img.icons8.com/?size=100&id=01Akfqm-En_q&format=png&color=000000" className="w-[2rem]" alt="" />
                                <span className="flex flex-col items-center ">24/7 Customer <span>services</span></span>

                            </Link>

                            <Link to={"/guides"} className="flex    text-[0.9rem] text-center items-center text-gray-500 flex-col">
                                <img src="https://img.icons8.com/?size=100&id=45880&format=png&color=000000" className="w-[2rem]" alt="" />
                                <span >Beginner's <span>Guide</span></span>
                            </Link>
                            <Link to={"/aboutus"} className="flex items-center  text-[0.9rem] text-gray-500 flex-col  text-center  ">
                                <img src="https://img.icons8.com/?size=100&id=YGCpatc8SFgI&format=png&color=000000" className="w-[2rem]" alt="" />
                                <span>About us</span>
                            </Link>

                        </div>
                    </div>

                    <button onClick={hanldelogout} className="w-[95%] mb-[100px]   border flex items-center justify-center gap-5 rounded-full  border-[#4a79c1]  text-[#4a79c1] h-[40px]"> <img className="w-[1.5rem]" src="https://img.icons8.com/?size=100&id=GtRfui8FwOx4&format=png&color=4a79c1" alt="" /> log out</button>
                </div>


            </div>


            <div className=" absolute top-0  z-[5]  bg-[#2b3270] h-[25vh]   w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]  rounded-br-[100px] rounded-bl-[100px] "></div>
        </div>
        

    );
};

export default Profile;
