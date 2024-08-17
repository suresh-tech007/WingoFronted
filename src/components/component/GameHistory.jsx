import React, { useEffect, useState } from 'react';
import Depocart from '../cart/Depocart';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Gamehistoryatable from './Gamehistoryatable';
import { toast } from 'react-toastify';
import { clearErrors, gameHistory } from '../../redux/actions/Gameaction';


const GameHistory = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { error, gamehistory } = useSelector((state) => state.batle);
console.log(gamehistory)

    const backhandle = () => {
        navigate("/profile")
    }

    useEffect(()=>{
        
        dispatch(gameHistory())

        if(error){
            toast.error(error)
            dispatch(clearErrors())
        }

    },[error,dispatch])



    return (
        <div className={`flex relative h-full items-center ${gamehistory && gamehistory.length <= 12 ? "h-screen " : ""} justify-center bg-gray-400`}>


            <div className={`bg-[#22275b] pt-[3rem]   ${gamehistory && gamehistory.length <= 12 ? "h-screen " : ""}    w-[400px]  `}>
                <div className=' fixed top-0 bg-[#22275b] w-[400px]  p-4 flex text-white items-center  font-semibold text-[1.1rem] gap-1'>
                    <img onClick={backhandle} className='w-[2rem] cursor-pointer' src="https://img.icons8.com/?size=100&id=85099&format=png&color=D9E2F299" alt="back" />
                    <h1 className='ml-6'> Transaction history</h1>
                </div>

                {gamehistory && gamehistory.length > 0 ? (<div className='pt-5 w-[400px] overflow-x-hidden  pb-2 '>


                    <table className=" h-full bg-[#22275b]   rounded-lg ">
                        <thead>
                            <tr className="bg-[#2b3270] text-[0.7rem] text-white text-left">
                                <th className="py-2 px-4">Game ID</th>
                                <th className="py-2 px-4">Bet Status</th>
                                <th className="py-2 px-4">Win Amount</th>
                                <th className="py-2 px-4">Selected Timer</th>
                            </tr>
                        </thead>
                        <tbody>

                            {gamehistory && gamehistory.map((game) => (
                                <tr key={game._id} className="border-t border-b border-[#8080809a] text-white text-[0.7rem] ">
                                    <td className="py-2 px-4">{game.GameId}</td>
                                    <td className={`py-2 px-4 font-semibold ${game.betstatus === 'Win' ? 'text-green-500' : 'text-red-500'}`}>
                                        {game.betstatus}
                                    </td>
                                    <td  className={`py-2 px-4 font-semibold ${game.betstatus === 'Win' ? 'text-green-500' : 'text-red-500'}`}>
                                        {game.win_amount==0? `- ${game.bet_amount}` : `+ ${ game.win_amount}`}
                                        
                                        </td>
                                    <td className="py-2 px-4">{game.selectedTimer}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>)
                    : (
                        <div className='    flex items-center  flex-col justify-center pt-[2rem]  '>
                            <img src="https://img.icons8.com/?size=100&id=rW2jdHbrzMDM&format=png&color=000000" alt="" />
                            <h1 className="text-[#80808093] font-poppins text-center mt-10">No transactions</h1>

                        </div>
                    )

                }
                <div className='h-[100px]'></div>
            </div>
        </div>

    );
};








export default GameHistory;