import React, { useState } from "react";
import image from "../../iamges/photo.jpg";
import depositeimg from "../../iamges/deposit.png"
import cardpay from "../../iamges/cardpayment.png"
import trahistory from "../../iamges/trahistory.png"
import withdraw from "../../iamges/withdraw.png"
import { IoMdWallet } from "react-icons/io";
import { Link } from "react-router-dom";
import { GiWallet } from "react-icons/gi";
import { IoIosWallet } from "react-icons/io";

const Settings = () => {
    const [uid, setUid] = useState("23452345");
    const copyToClipboard = (uid) => {
        navigator.clipboard.writeText(uid).then(() => {
            alert('Text copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };
    return (
        <div className="flex relative h-screen    items-center justify-center     max-h-full   bg-gray-400">

            <div className=" py-8  pt-0  bg-[#22275b]   h-full   md:w-[400px] w-screen  max-h-full    ">
            <div className='text-white  flex items-center fixed top-0   w-[400px] justify-between px-3 h-[3rem] z-50 bg-[#2b3270]'>
                    <Link to={"/wallet"}><img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=40217&format=png&color=FBFBFB" alt="" /></Link>
                     
                        <h1 className=' pr-[8rem] font-semibold text-[1.1rem]'>Settings Center</h1>
                        
                    
                </div>
                <div className=" flex items-center    justify-center flex-col ">

                    <div className="flex  items-center justify-start   w-full pl-5  pt-9 pb-0 z-10  ">

 
                    </div>
                    <div className="  bg-[#374992] h-[30vh] text-white font-serif  flex  rounded-3xl p-5 m-5 mx-6 w-[95%] z-10  flex-col justify-evenly ">
                        <div className="flex items-center justify-between">
                            <div className="rounded-full  h-[8vh] mr-5 flex z-10  items-center justify-center w-[8vh] overflow-hidden ">
                                <img src={image} alt="profile_pic" />
                            </div>
                            <div className="flex gap-3">
                                <p className="text-[#e4e4e4]">Change avatar</p>
                                <img className="w-[1.4rem]" src="https://img.icons8.com/?size=100&id=60671&format=png&color=7C7E7FF7 " alt="" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p  >
                                suresh kumar
                            </p>
                            <div className="flex gap-3">
                                <p className="text-[#f2f1f1]">Change Name</p>
                                <img className="w-[1.4rem]" src="https://img.icons8.com/?size=100&id=60671&format=png&color=7C7E7FF7 " alt="" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between ">
                            <p>UID</p>
                            <div className="flex gap-3">
                                <span className="text-[#dbd9d9]"> {uid}</span>
                                <img onClick={copyToClipboard} className="w-[1.5rem]" src="https://img.icons8.com/?size=100&id=86216&format=png&color=1B1F2499" alt="" />
                            </div>

                        </div>






                    </div>
                     
                   <div className="flex  items-start w-[400px] pl-5">
                   <h1 className=" font-poppins   text-white  font-semibold">Security information</h1>
                   </div>
                    <div className=" bg-[#2b3270] h-[8vh] text-white  font-sans   flex  rounded-xl  px-5 m-5 mx-6 w-[95%] z-10 items-center   justify-between">
                      <div className="flex items-centere">
                        <img  className="w-[2rem]" src="" alt="" />
                        <p>Login password</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#a1a1a1]">Edit</span>
                        <img className="w-[1.3rem] " src="https://img.icons8.com/?size=100&id=60671&format=png&color=7C7E7FF7" alt="" />
                      </div>
                        
                    </div>
                   
                     

                   
                </div>


            </div>


            <div className=" absolute top-0  z-[5]  bg-[#2b3270] h-[25vh] w-[400px] rounded-br-[100px] rounded-bl-[100px] "></div>
        </div>


    );
};




export default Settings;