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

const Commingsoon = () => {
     
    return (
        <div className={`flex relative  h-screen   items-center justify-center bg-gray-400`}>


            <div className={`bg-[#22275b] pt-[3rem]  h-screen   flex items-center justify-center text-white  w-[400px]  `}>



                <p>comming soon </p>



            </div>



        </div>


    );
};





export default Commingsoon;