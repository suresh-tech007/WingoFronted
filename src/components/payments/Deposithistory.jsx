import React, { useState } from 'react';

const Deposithistory = () => {
    const depodata = [
        {
            balance: "200",
            Type: "7Days-Paytm x QR",
            Time: "July 05, 2024, 11:52:34",
            orderNumber: "Pt2024072807531989624491",
            status:"Failed"
        },
        {
            balance: "300",
            Type: "7Days-Paytm x QR",
            Time: "July 30, 2024, 11:52:34",
            orderNumber: "Pt2024072807531989624492",
            status:"Failed"
        },
        {
            balance: "400",
            Type: "7Days-Paytm x QR",
            Time: "July 30, 2024, 11:52:34",
            orderNumber: "Pt2024072807531989624493",
            status:"Success"
        },
        {
            balance: "500",
            Type: "7Days-Paytm x QR",
            Time: "July 30, 2034, 11:52:34",
            orderNumber: "Pt2024072807531989624494",
            status:"Success"
        },
        {
            balance: "500",
            Type: "7Days-Paytm x QR",
            Time: "July 30, 2034, 11:52:34",
            orderNumber: "Pt2024072807531989624494",
            status:"Success"
        },
    ];

    const [pamentstatus, setPamentstatus] = useState("Success");

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Text copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div className="flex relative h-full  items-center justify-center bg-gray-400">
            
                   
            <div className="bg-[#22275b] pt-[3rem]  max-w-full md:w-[400px] w-screen">
            <div className=' fixed top-0 bg-[#22275b] w-[400px]  p-4 flex text-white items-center font-semibold text-[1.1rem] gap-1'>
                        <img className='w-[2rem]' src="https://img.icons8.com/?size=100&id=AbrQV4ddrXNz&format=png&color=000000" alt="" />
                        <h1>Deposit history</h1>
                    </div>
               
                   <div className='pt-3'>
                   {depodata.length === 0 ? (
                        <h1 className="text-white text-center mt-10">No transactions</h1>
                    ) : (
                        depodata.map((data, index) => (
                            <div key={index} className="m-3 p-4 bg-[#2b3270] rounded-xl shadow-md space-y-4">
                                <div className='flex items-center border-b pb-4 border-[#6d6dc58a] justify-between'>
                                    <span className='font-sans font-medium text-white bg-green-500 px-3 py-1 rounded-lg'>Deposit</span>
                                    <span className={`font-serif font-normal ${data.status === "Failed" ? "text-red-600" : "text-green-500"}`}>
                                        {data.status}
                                        
                                    </span>
                                </div>
                                <div className='flex text-gray-400 items-center justify-between text-[0.8rem] gap-2 flex-col'>
                                    <div className='flex justify-between items-center w-full'>
                                        <p>Balance</p>
                                        <span className='text-yellow-600'>₹{data.balance}.00</span>
                                    </div>
                                    <div className='flex justify-between items-center w-full'>
                                        <p>Type</p>
                                        <span>{data.Type}</span>
                                    </div>
                                    <div className='flex justify-between items-center w-full'>
                                        <p>Time</p>
                                        <span>{data.Time}</span>
                                    </div>
                                    <div className='flex justify-between items-center w-full text-nowrap'>
                                        <p>Order Number</p>
                                        <div>
                                            <span>{data.orderNumber}</span>
                                            <button onClick={() => copyToClipboard(data.orderNumber)}>
                                                <img className='w-[0.9rem] ml-1 mt-1' src="https://img.icons8.com/?size=100&id=86206&format=png&color=525C6A99" alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                   </div>
                </div>
            </div>
         
    );
};

export default Deposithistory;
