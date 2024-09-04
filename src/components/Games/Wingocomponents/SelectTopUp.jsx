import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import socket from '../../../socket/socket.js';
import { useDispatch, useSelector } from 'react-redux';
import { adduserbatle, clearErrors } from '../../../redux/actions/Gameaction.js';
import { toast } from 'react-toastify';
import { walletbalance } from '../../../redux/actions/PaymentAciton.js';
import Loading from '../../component/Loading.jsx';

function generateBatleId() {
  const randomPart = Math.floor(Math.random() * 10000000); // Generate a 6-digit random number
  const timestampPart = Date.now().toString().slice(-7); // Get last 7 digits of current timestamp
  const batleId = randomPart.toString() + timestampPart; // Combine the two parts
  return batleId;
}

const SelectTopUp = ({walletBalance=null,setWalletBalance=null, gameIDs = null, selected = null, selectedTimer = null, selectColor = null, selectQuanitity = 1, setSelectColor = null, setSelectednum = null, selectednum = null, setBigsmall = null }) => {
  const dispatch = useDispatch()
  const { error ,loading : Load } = useSelector((state) => state.batle);
  const { depositBalance,withdrawableBalance ,loading } = useSelector((state) => state.payment);
  const [selectedbuttons, setSelectedbuttons] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [selectcolors, setSelectcolors] = useState(null);
  const [selectednumbers, setSelectednumbers] = useState([]);
  const [balance, setBalance] = useState(5);
  const [agree, setAgree] = useState(false);

  const { user } = useSelector(
    (state) => state.user
  );



  const increasequinity = () => {
    if (quantity < 100) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decregequinitity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const cancelhandle = () => {
    setBigsmall(null);
    setSelectednum(null);
    setSelectColor(null);
    setAgree(false);
  };



  const handleSumbitButton = () => {

    if ((selectednumbers == null) && (selectcolors == null) && (selectedbuttons !== null)) {
      if (selectedbuttons === 'Small') {
        setSelectednumbers([0, 1, 2, 3, 4]);
      } else if (selectedbuttons === 'Big') {
        setSelectednumbers([5, 6, 7, 8, 9]);
      }
    }

    if ((selectedbuttons == null) && (selectcolors == null) && selectednumbers !== null) {
      if (selectednumbers <= 4) {
        setSelectedbuttons("Small");
      } else if (selectednumbers >= 5) {
        setSelectedbuttons("Big");
      }
      if (selectednumbers === 0) {
        setSelectcolors(["Red", "Violet"]);
      } else if (selectednumbers === 5) {
        setSelectcolors(["Red", "Violet"]);
      } else if (selectednumbers === (1 || 3 || 7 || 9)) {
        setSelectcolors(["Green"]);
      } else {
        setSelectcolors(["Red"]);
      }
    }

    if ((selectedbuttons == null) && (selectednumbers == null) && (selectcolors !== null)) {
      if (selectcolors == "Red") {
        setSelectednumbers([0, 2, 4, 6, 8]);
      } else if (selectcolors == "Green") {
        setSelectednumbers([1, 3, 5, 7, 9]);
      } else {
        setSelectednumbers([0, 5]);
      }
    }
  };

  useEffect(() => {
    if ((selectednumbers || selectednumbers == 0) && (selectcolors || selectedbuttons)) {
      const uniqueBatleId = generateBatleId();
      const betData = {
        GameId: gameIDs[selectedTimer],
        userid: user._id,
        selectedTimer,
        balance,
        GameName:"WinGo" ,
        quantity,
        selectColor: selectcolors,
        selectednum: selectednumbers,
        selected: selectedbuttons,
        uniqueBatleId
      };

      const batleamount = balance * quantity

      if (walletBalance > batleamount && walletBalance > 10 ) {
        
        dispatch(adduserbatle(betData))
        socket.emit('placeBet', betData);  
        setTimeout(() => {
        dispatch(walletbalance())
        },500)
      } else {
          toast.error("Insufficient funds")
      }



      cancelhandle();
    }
    if (depositBalance && withdrawableBalance) {
      
      const balance = withdrawableBalance + depositBalance;
      setWalletBalance(balance);
    }
    return ;
  }, [selectednumbers, selectcolors, selectedbuttons, depositBalance,withdrawableBalance]);

  useEffect(() => {

    setQuantity(selectQuanitity);
    setSelectedbuttons(selected);
    setSelectcolors(selectColor);
    setSelectednumbers(selectednum);

    if (error) {
      toast.error(error)
      dispatch(clearErrors())
    }



  }, [selectQuanitity, selectColor, selected, selectednum, error]);

  return (
    <div className='w-full fixed bottom-[4rem]'>
      <div className={`${selectColor === "Green" ? "bg-green-500" : selectColor === "Red" ? "bg-red-500" : selectColor === "Violet" ? "bg-violet-500" : selected === "Big" ? "bg-yellow-600" : selectednum == 0 || selectednum == 2 || selectednum == 4 || selectednum == 6 || selectednum == 8 ? "bg-red-600" : selectednum == 1 || selectednum == 3 || selectednum == 5 || selectednum == 7 || selectednum == 9 ? "bg-green-600" : "bg-[#4d93de]"} rounded-t-lg w-[400px] mx-auto z-50 shadow-lg`}>
        {Load || loading && <Loading />}
        <h1 className="text-center pt-2 text-black font-bold text-lg">Win Go</h1>
        <div className="text-center flex gap-2 items-center justify-center text-black font-bold text-lg">
          <span>Selected</span>
          <span>{(selected || selectColor) || (selectednum === 0 ? 0 : selectednum)}</span>
        </div>

        <div className="bg-indigo-900 mt-4 p-4">
          <div className="text-white font-bold">Balance</div>
          <div className="flex justify-between mt-2">
            <div className="flex space-x-2">
              <button onClick={() => setBalance(5)} className={`${balance === 5 ? "bg-orange-400 text-black" : "bg-indigo-700 text-white"} px-4 py-2 rounded`}>5</button>
              <button onClick={() => setBalance(10)} className={`${balance === 10 ? "bg-orange-400 text-black" : "bg-indigo-700 text-white"} px-4 py-2 rounded`}>10</button>
              <button onClick={() => setBalance(100)} className={`${balance === 100 ? "bg-orange-400 text-black" : "bg-indigo-700 text-white"} px-4 py-2 rounded`}>100</button>
              <button onClick={() => setBalance(1000)} className={`${balance === 1000 ? "bg-orange-400 text-black" : "bg-indigo-700 text-white"} px-4 py-2 rounded`}>1000</button>
            </div>
          </div>

          <div className="text-white font-bold mt-4">Quantity</div>
          <div className="flex justify-center items-end flex-col gap-2 mt-2">
            <div className="flex items-center gap-2">
              <button onClick={decregequinitity} className="bg-indigo-700 text-white px-4 py-2 rounded">-</button>
              <input
                type="number"
                defaultValue={quantity}
                className="text-center pl-3 text-[1rem] bg-indigo-700 text-white w-[3.3rem] h-[2.5rem] rounded"
                readOnly
              />
              <button onClick={increasequinity} className="bg-indigo-700 text-white px-4 py-2 rounded">+</button>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => setQuantity(1)} className={`${quantity === 1 ? "bg-orange-400" : "bg-indigo-700"} text-white px-2 py-2 rounded`}>X1</button>
              <button onClick={() => setQuantity(5)} className={`${quantity === 5 ? "bg-orange-400" : "bg-indigo-700"} text-white px-2 py-2 rounded`}>X5</button>
              <button onClick={() => setQuantity(10)} className={`${quantity === 10 ? "bg-orange-400" : "bg-indigo-700"} text-white px-2 py-2 rounded`}>X10</button>
              <button onClick={() => setQuantity(20)} className={`${quantity === 20 ? "bg-orange-400" : "bg-indigo-700"} text-white px-2 py-2 rounded`}>X20</button>
              <button onClick={() => setQuantity(50)} className={`${quantity === 50 ? "bg-orange-400" : "bg-indigo-700"} text-white px-2 py-2 rounded`}>X50</button>
              <button onClick={() => setQuantity(100)} className={`${quantity === 100 ? "bg-orange-400" : "bg-indigo-700"} text-white px-2 py-2 rounded`}>X100</button>
            </div>
          </div>

          <div className="mt-4 flex items-center">
            <input
              checked={agree}
              onChange={() => setAgree((prev) => !prev)}
              className="rounded-full mr-2"
              type="checkbox"
            />
            <span className="text-blue-500 font-semibold">I agree</span>
            <Link to="salerules" className="text-red-500 font-semibold text-xs ml-2">
              (Pre-sale rules)
            </Link>
          </div>

        </div>

        <div className="flex items-center h-[3rem]">
          <button onClick={cancelhandle} className="bg-orange-400 text-black w-[40%] py-3">Cancel</button>
          <button
            disabled={agree === false}
            onClick={handleSumbitButton}
            className="text-center w-[60%] text-black font-bold">
            Total amount ₹{balance * quantity}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectTopUp;
