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

            <div className=" py-8  pt-0  bg-[#22275b] flex items-center  justify-center text-white    h-full   md:w-[400px] w-screen  max-h-full    ">
            
<p>comming soon </p>
                   
               

            </div>


           
        </div>


    );
};




 
export default Commingsoon;