import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import clockbig from "../../iamges/wingoimg/time_a-d4670671.png"
import clocksmall from "../../iamges/wingoimg/time-d2b95809.png"
import coin0 from "../../iamges/wingoimg/n0-30bd92d1.png"
import coin1 from "../../iamges/wingoimg/n1-dfccbff5.png"
import coin2 from "../../iamges/wingoimg/n2-c2913607.png"
import coin3 from "../../iamges/wingoimg/n3-f92c313f.png"
import coin4 from "../../iamges/wingoimg/n4-cb84933b.png"
import coin5 from "../../iamges/wingoimg/n5-49d0e9c5.png"
import coin6 from "../../iamges/wingoimg/n6-a56e0b9a.png"
import coin7 from "../../iamges/wingoimg/n7-5961a17f.png"
import coin8 from "../../iamges/wingoimg/n8-d4d951a4.png"
import coin9 from "../../iamges/wingoimg/n9-a20f6f42.png"
import Digit from './Wingocomponents/Digit.jsx';
import Imagges from './Wingocomponents/Imagges.jsx';
import Xbuttons from './Wingocomponents/Xbuttons';
import GameHistorytable from './Wingocomponents/GameHistorytable';
import SelectTopUp from './Wingocomponents/SelectTopUp';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, walletbalance } from '../../redux/actions/PaymentAciton';
import { gameHistory, resultHistory } from '../../redux/actions/Gameaction';
 
import { toast } from 'react-toastify';
import DepositModal from '../component/DepositModal .jsx';
import socket from '../../socket/socket.js';
import WinTopup from './Wingocomponents/WinTopup.jsx';
import { loaduser } from '../../redux/actions/userAction.js';

 


 
const imges = [coin0, coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9];
const xbutton = [1, 5, 10, 20, 50, 100]

const WinGo = () => {
  const {  gamehistory,loading } = useSelector((state) => state.batle);
  const {  isNewuser } = useSelector(
    (state) => state.payment 
  );
  const { user } = useSelector((state) => state.user);
  const socketRef = useRef(null);
  const [countdown, setCountdown] = useState({
    "1Min": 0,
    "3Min": 0,
    "5Min": 0,
    "10Min": 0,
  });
  const [gameIDs, setGameIDs] = useState({
    "1Min": '',
    "3Min": '',
    "5Min": '',
    "10Min": '',
  });
  const { depositBalance,withdrawableBalance } = useSelector((state) => state.payment);
  
  const { totalPages,currentPage,resultsPerPage, error } = useSelector((state) => state.batle);
  const dispatch = useDispatch()
  
   
  const [selected, setSelected] = useState("1Min");
  const [countdownDigits, setCountdownDigits] = useState([]);
  const [digits, setDigits] = useState([]);
  const [bigsmall, setBigsmall] = useState("");
  const [selcetX, setSelecteX] = useState(null);
  const [selectnum, setSelectnum] = useState(null);
  const [selectColor, setSelectColor] = useState(null);
  const [userbetData,setUserbetData] = useState([])
 
  const [page, setPage] = useState(currentPage)
  const [walletBalances, setWalletBalances] = useState(null)
  const [showwintopup, setShowwintopup] = useState(false)

 
 

  const navigate = useNavigate();


 
  useEffect(() => {
    // Initialize socket connection
    if (!socketRef.current) {
      socketRef.current =  socket

      
      socketRef.current.on("connect", () => {
        // console.log("Connected to the server");
      });

      socketRef.current.on("disconnect", () => {
        // console.log("Disconnected from the server");
      });

      socketRef.current.on("countdown", (data) => {
        setCountdown(prevCountdowns => ({
          ...prevCountdowns,
          [data.type]: data.value,
        }));
      });

      socketRef.current.emit ("requestGameIDs");

      socketRef.current.on("gameID", (newGameIDs) => {
        setGameIDs(newGameIDs);
      });

      socketRef.current.on("gameData", (data) => {
        setGameData(data);
      });
    }
  

    // Cleanup on component unmount
    return () => {
      // if (socketRef.current) {
      //   socketRef.current.disconnect();
      // }
    };
  }, []);
  useEffect(()=>{
    if(countdown[selected] == 2){
      dispatch(gameHistory());
    }
    if(!user){
      dispatch(loaduser())
    }
  },[dispatch])

  useEffect(() => {
  if(countdown[selected] == 2){
    dispatch(gameHistory());
  }
    
  
  if (countdown[selected] === 1 && gamehistory && userbetData) {
   
    const result = gamehistory[0];
  
    
    userbetData.forEach((betData) => {
      if (result.GameId === betData.GameId && betData.uniqueBatleId === result.uniqueBatleId) {
        setShowwintopup(true);
        
        
      }
    });
  }
    
     

    if (countdown[selected] === 0) {
      setUserbetData([])
      socketRef.current.emit('timerEnded', selected);
      setTimeout(() => {
        if(user){
          dispatch(walletbalance());
        dispatch(resultHistory(currentPage, resultsPerPage));
        }
      }, 200);
    }
    if (countdown["1Min"] === 0) {
      
      socketRef.current.emit ('timerEnded', "1Min");
      setTimeout(() => {
        dispatch( walletbalance())
        dispatch(resultHistory(currentPage,resultsPerPage))
      }, 200)

    }
    else if (countdown["3Min"] === 0) {
      socketRef.current.emit ('timerEnded', "3Min");
      setTimeout(() => {
        dispatch( walletbalance())
        dispatch(resultHistory(currentPage,resultsPerPage))
      }, 200)
    }
    else if (countdown["5Min"] === 0) {
      socketRef.current.emit ('timerEnded', "5Min");
      setTimeout(() => {
        dispatch( walletbalance())
        dispatch(resultHistory(currentPage,resultsPerPage))
      }, 200)

    }
    else if (countdown["10Min"] === 0) {
      socketRef.current.emit ('timerEnded', "10Min");
      setTimeout(() => {
        dispatch( walletbalance())
            dispatch(resultHistory(currentPage,resultsPerPage))
      }, 200)

    }



    const countdownManage = (select) => {
      setCountdownDigits(countdown[select].toString().padStart(2, '0').split(''));
      const timeString = formatTime(countdown[select]);
      setDigits(timeString.split(''));
    };
    countdownManage(selected);

    if (countdown[selected] === 5) {
      setSelecteX(null);
      setSelectColor(null);
      setBigsmall(null);
      socketRef.current.emit('finalizeBets', countdown);
    }

    if (depositBalance !== null && withdrawableBalance !== null) {
      setWalletBalances(withdrawableBalance + depositBalance);
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

  }, [selected, dispatch, error, countdown, depositBalance, withdrawableBalance]);
  function getDataWithExpiry(key) {
    const itemStr = localStorage.getItem(key);

    
    if (!itemStr) {
        return null;
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

 
    if (now.getTime() > item.expiry) {
        
        localStorage.removeItem(key);
        return null;
    }

    return item.value;
}
 
const [depositModel , setDepositModel] = useState(false);

  useEffect(()=>{
    let values = null
   if(!values && isNewuser){
      values = getDataWithExpiry("timeredepositmodel")
   }
    
    

    setTimeout(() => {
      if(isNewuser){
        setDepositModel(true)
      }
      
    }, values || 3000);
    
    if(error ){
      toast.error(error)
      dispatch(clearErrors())
    }
     
  },[error ])

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  };

  const reloadhanlde = () => {
    dispatch(walletbalance())
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setPage((prev)=> --prev );
      let page = currentPage-1
      
      dispatch(resultHistory(page,resultsPerPage))
    }
  };

  const handleNextPage = () => {
    
    if (currentPage < totalPages) {
      
      let page = currentPage+1
       
      dispatch(resultHistory(page,resultsPerPage))
    }
  };

  const handleselecttimer = (select) => {
    setSelected(select);
  };


  return (
    <div className="flex  relative   items-center justify-center min-h-screen   overflow-hidden bg-gray-400">
      { depositModel &&  <DepositModal setDepositModel={setDepositModel} deposits={null} updateDeposit={400} />}
      <div className="py-8 bg-[#22275b]   relative   w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]  text-white">
      
        <div className='text-white  flex items-center fixed top-0  z-50   w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]  justify-center px-3 h-[3rem] bg-[#2b3270]'>
       <div className={`${showwintopup ? " opacity-1 scale-1":"   opacity-0 scale-0 "} transition-all duration-500 absolute top-0`}>
       {showwintopup && (
      <WinTopup 
        result={gamehistory[0]} 
        showwintopup={showwintopup} 
        setShowwintopup={setShowwintopup} 
      />
    )}
       </div>
    
          {/* <Link to={"/home"}><img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=40217&format=png&color=FBFBFB" alt="" /></Link> */}

          <h1 className='  font-semibold text-[1.1rem]'>Win-Go</h1>


        </div>
        
        <div className={` bg-custom-image bg-center bg-cover bg-no-repeat  mt-5  flex flex-col  items-center gap-2 bg-[#374992]    rounded-2xl m-4 p-4 `} >
          <div className='flex  items-center gap-4'>
            <p className='text-start font-bold font-sans text-[1.4rem]  '>₹ {depositBalance !==null && walletBalances !==null && walletBalances > 0 ? walletBalances : "0.00"}</p>
            <button onClick={reloadhanlde}  ><img className='w-[1.1rem]  p1-0.5' src="https://img.icons8.com/?size=100&id=1742&format=png&color=FFFFFFCC" alt="reload" /></button>
          </div>
          <div className='flex  items-center gap-4 mb-4'>
            <img className='  h-[1.5rem]' src="https://img.icons8.com/?size=100&id=LxhmnBiCAvFS&format=png&color=000000" alt="" />
            <span>Wallet balance</span>
          </div>
          <div className='flex gap-8'>
            <Link to="/wallet/withdraw" className='    font-semibold bg-red-700 rounded-3xl px-5 py-1 '>withdraw</Link>
            <Link to="/wallet/deposit" className='    font-semibold bg-green-600 rounded-3xl px-6 py-1.5 '>Deposit</Link>

          </div>
        </div>
        <div className={` mx-4 text-[#dbd5d5]  text-[0.9rem]  rounded-xl bg-[#374992] grid grid-cols-4 gap-0`}>
          <div onClick={() => handleselecttimer("1Min")} className={`rounded-xl cursor-pointer flex items-center flex-col   pt-3   ${selected == "1Min" ? "bg-[#2a99f3]" : "bg-[#374992]"} `}>
            <img className='w-[3rem]' src={selected == "1min" ? clockbig : clocksmall} alt="" />
            <p>Win Go </p>
            <p>1Min</p>
          </div>
          <div onClick={() => handleselecttimer("3Min")} className={`rounded-xl cursor-pointer flex items-center flex-col   pt-3   ${selected == "3Min" ? "bg-[#2a99f3]" : "bg-[#374992]"} `}>
            <img className='w-[3rem]' src={selected == "3Min" ? clockbig : clocksmall} alt="" />
            <p>Win Go </p>
            <p>3Min</p>
          </div>
          <div onClick={() => handleselecttimer("5Min")} className={`rounded-xl cursor-pointer flex items-center flex-col   pt-3   ${selected == "5Min" ? "bg-[#2a99f3]" : "bg-[#374992]"} `}>
            <img className='w-[3rem]' src={selected == "5Min" ? clockbig : clocksmall} alt="" />
            <p>Win Go </p>
            <p>5Min</p>
          </div>
          <div onClick={() => handleselecttimer("10Min")} className={`rounded-xl cursor-pointer flex items-center flex-col   pt-3   ${selected == "10Min" ? "bg-[#2a99f3]" : "bg-[#374992]"} `}>
            <img className='w-[3rem]' src={selected == "10Min" ? clockbig : clocksmall} alt="" />
            <p>Win Go </p>
            <p>10 Min</p>
          </div>
        </div>
        <div className='bg-custom-back   flex items-center justify-between  w-[90vw] sm:w-[370px] lg:w-[370px]  md:w-[370px]   bg-cover rounded-lg   h-[6.7rem] m-4 bg-no-repeat p-4    '>
          <div className='flex flex-col '>
            <button className='flex border border-[#0000005b] items-center justify-center rounded-xl px-3'>
              <img className='w-[1.3rem]' src="https://img.icons8.com/?size=100&id=igQGPLZQ4FuR&format=png&color=000000" alt="" />
              <span className='text-[0.8rem] '>how to play</span></button>
            <span className='text-[0.8rem] p-1 '>win Go {selected}</span>
            <div className='flex mt-1  gap-1'>

              <img className='w-[1.7rem]' src={coin0} alt="" />
              <img className='w-[1.7rem]' src={coin2} alt="" />
              <img className='w-[1.7rem]' src={coin4} alt="" />
              <img className='w-[1.7rem]' src={coin6} alt="" />
              <img className='w-[1.7rem]' src={coin9} alt="" />
            </div>

          </div>
          <div className='flex items-end font-serif flex-col '>
            <span className='text-[0.7rem]   '>Time remaining</span>

            <div className="flex gap-1">
              {digits.map((digit, index) => (
                <Digit key={index} value={digit} />
              ))}
            </div>
            <span className='mt-1 '>{gameIDs[selected]}</span>
          </div>

        </div>
        <div className='flex relative border  items-center flex-col bg-[#2b3270] m-4 rounded-xl '>
          <div className={` ${countdown[selected] >= 6 ? "hidden" : "flex"} absolute  items-center h-full rounded-xl justify-center top-0 w-full  gap-5 bg-[#00000090]`}>
            <span className='text-[4rem] p-4  flex gap-3  w-full items-center justify-center  rounded-xl  font-medium text-[#61a9ff]'>  {countdownDigits.map((digit, index) => (
              <div key={index} className='bg-[#374992]  text-center  rounded-lg px-2 w-[3.5rem]'>
                {digit}
              </div>
            ))}</span>

          </div>
          <div className='flex gap-5 mt-3'>
            <button onClick={() => setSelectColor("Green")} className='   px-6 rounded-br-none  rounded-tl-none rounded-xl bg-green-600'>Green</button>
            <button onClick={() => setSelectColor("Violet")} className='   px-6  rounded-lg bg-[#9b48db]'>Violet</button>
            <button onClick={() => setSelectColor("Red")} className='   px-6  rounded-bl-none  rounded-tr-none py-1 rounded-xl bg-red-600'>Red</button>

          </div>
          <div className='grid grid-cols-5 gap-1 bg-[#22275b] p-3   m-3 rounded-lg'>
            {imges.map((imgs, index) =>
              (<Imagges key={index} selectimg={selectnum} setSelectimg={setSelectnum} alt={index} src={imgs} />)
            )
            }


          </div>
          <div className='flex  p-3   gap-1 overflow-hidden'>
            <button className='border font-normal   py-1 px-2 border-red-700 rounded-lg text-[#b01010]'>Random</button>
            {xbutton.map((value, index) => (
              <Xbuttons selectx={selcetX} setSelecteX={setSelecteX} value={value} key={index} />
            ))}

          </div>
          <div className='m-1 my-2'>
            <button onClick={() => setBigsmall("Big")} className=' rounded-l-3xl bg-yellow-600   px-[4rem]  py-2'>Big</button>
            <button onClick={() => setBigsmall("Small")} className=' rounded-r-3xl bg-blue-500   px-[4rem] py-2' >Small</button>
          </div>

        </div>
        <div className='flex gap-2 font-mono items-center justify-between m-6'>
          <button className=' px-4 py-1.5 rounded-lg bg-[#2995f2]  text-nowrap'>Game history</button>

        </div>
        <div className="flex justify-center">
          <GameHistorytable   />
        </div>
        <div className="flex justify-center items-center mx-3 space-x-6 bg-[#2b3270] p-4  ">
          <button
            className={`px-3 py-2 rounded-lg ${currentPage === 1 ? 'bg-[#374992]' : 'bg-[#2c3b6b]'} text-white`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          <span className="text-white">
            {currentPage}/{totalPages}
          </span>
          <button
            className={`px-3 py-2 rounded-lg ${currentPage === totalPages ? 'bg-[#374992]' : 'bg-[#2c3b6b]'} text-white`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>


        </div>


        <div className={`${countdown[selected] > 6 && (bigsmall === "Big" || bigsmall === "Small" || selectnum !== null || selectColor !== null) ? "flex" : "hidden"} absolute top-0 h-full bg-[#00000079]   w-full items-center justify-center`}>

          <SelectTopUp setUserbetData={setUserbetData} setWalletBalance={setWalletBalances} walletBalance={walletBalances} gameIDs={gameIDs} selectedTimer={selected} selectColor={selectColor} setSelectednum={setSelectnum} selectednum={selectnum} setBigsmall={setBigsmall} setSelectColor={setSelectColor} selectQuanitity={selcetX || 1} selected={bigsmall} />

        </div>



        <div className='h-[10rem]'></div>
      </div>


    </div>
  )
}

export default WinGo