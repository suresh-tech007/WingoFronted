import React from "react";
import { Link } from "react-router-dom";
import win1 from "../../iamges/Homepageimg/1.png";
import win2 from "../../iamges/Homepageimg/2.png";
import win3 from "../../iamges/Homepageimg/3.png";
import win4 from "../../iamges/Homepageimg/4.png";
import avi2 from "../../iamges/Homepageimg/Aviator (2).png";
import avi from "../../iamges/Homepageimg/aviator.png";
import limbo from "../../iamges/Homepageimg/limbo.png";
import plinko from "../../iamges/Homepageimg/plinko.png";
import plinko2 from "../../iamges/Homepageimg/pli2.png";
import mines from "../../iamges/Homepageimg/mines.png";


const Homepage = () => {
    return (
        <div className="flex relative   items-center justify-center        bg-gray-400">

            <div className=" py-8  pt-0  bg-[#22275b]      w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]  max-h-full    ">

                <div className='text-white  flex items-center fixed top-0    z-50   w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]   justify-between px-3 h-[3rem] bg-[#2b3270]'>

                    <h1 className=" font-medium  text-[1.5rem]">Tirange</h1>
                    <Link to={"/notifications"}>
                        <img className="w-[2rem]" src="https://img.icons8.com/?size=100&id=12920&format=png&color=1C72D699" alt="" />
                    </Link>

                </div>
                <div className="flex items-center flex-col  w-full  text-white pt-[5vh]">
                    <div className="flex items-center border-l-4 pl-1    h-[1rem]  border-[#61a9ff] mt-4   font-serif   w-full  px-4 ml-9 mb-2   font-semibold text-[1.2rem]">
                        <h1>Lottery</h1>
                        
                    </div>
                    <div className="grid grid-cols-2 w-full p-4 gap-4 pt-0 " >
                        <div className="flex  items-center rounded-lg h-[14rem] w-[100%]  flex-col bg-blue-500  p-3  font-semibold  text-[1.4rem] ">
                            <h1>Win Go</h1>
                            <img className="h-[8rem]" src={win1} alt="" />
                            <div className="flex w-full  items-end justify-end">
                                <Link to={"/WinGo"} className="flex text-[1.2rem] px-3 font-semibold font-mono  justify-center   items-center  border rounded-3xl  ">
                                    <span>GO</span>
                                    <img className="w-[1.5rem]" src="https://img.icons8.com/?size=100&id=86517&format=png&color=F9F9F9" alt="" />
                                </Link>
                            </div>

                        </div>
                        <div className="flex  items-center rounded-lg h-[14rem] w-[100%]  flex-col bg-blue-500  p-3  font-bold  text-[1.5rem] ">
                        <h1 className=" text-center  font-mono">K3</h1>
                            <img className="h-[8rem]" src={win2} alt="" />
                            <div className="flex w-full  items-end justify-end">
                                <button className="flex text-[1.2rem] px-3 font-semibold font-mono  justify-center   items-center  border rounded-3xl  ">
                                    <span>GO</span>
                                    <img className="w-[1.5rem]" src="https://img.icons8.com/?size=100&id=86517&format=png&color=F9F9F9" alt="" />
                                </button>
                            </div>

                        </div>
                        <div className="flex  items-center rounded-lg h-[14rem] w-[100%]  flex-col bg-blue-500  p-3  font-bold  text-[1.5rem] ">
                            <h1 className=" text-center  font-mono">5D</h1>
                            <img className="h-[8rem]" src={win3} alt="" />
                            <div className="flex w-full  items-end justify-end">
                                <button className="flex text-[1.2rem] px-3 font-semibold font-mono  justify-center   items-center  border rounded-3xl  ">
                                    <span>GO</span>
                                    <img className="w-[1.5rem]" src="https://img.icons8.com/?size=100&id=86517&format=png&color=F9F9F9" alt="" />
                                </button>
                            </div>

                        </div>
                        <div className="flex  items-center rounded-lg h-[14rem] w-[100%]  flex-col bg-blue-500  p-3  font-semibold  text-[1.4rem] ">
                            <h1>Trx Win Go</h1>
                            <img className="h-[8rem]" src={win4} alt="" />
                            <div className="flex w-full  items-end justify-end">
                                <button className="flex text-[1.2rem] px-3 font-semibold font-mono  justify-center   items-center  border rounded-3xl  ">
                                    <span>GO</span>
                                    <img className="w-[1.5rem]" src="https://img.icons8.com/?size=100&id=86517&format=png&color=F9F9F9" alt="" />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex items-center flex-col  w-full  text-white pt-[5vh]">
                    <div className="flex items-center border-l-4 pl-1    h-[1rem]  border-[#61a9ff] mt-4   font-serif   w-full   font-semibold px-4 ml-9 mb-2     text-[1.2rem]">
                        <h1>Original</h1>
                        
                    </div>
                    <div className="grid grid-cols-3 w-full p-4 gap-4 pt-0 " >
                         <img  className="rounded-lg cursor-pointer" src={avi2} alt="" />
                         <img className="rounded-lg cursor-pointer"  src={plinko} alt="" />
                         <img className="rounded-lg cursor-pointer"  src={limbo} alt="" />
                         <img className="rounded-lg cursor-pointer"  src={avi} alt="" />
                         <img className="rounded-lg cursor-pointer"  src={plinko2} alt="" />
                         <img  className="rounded-lg cursor-pointer" src={mines} alt="" />
                    </div>
                </div>

                <div className="h-[10rem]"></div>

            </div>
        </div>


    );
};




export default Homepage;