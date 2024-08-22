import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearErrors, getreferUser } from '../../../redux/actions/PaymentAciton';
import Loading from "../Loading"


const InvitationBonus = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(
    (state) => state.user
  );
  const { referUserDetails, loading, error } = useSelector(
    (state) => state.referUser
  );
   

  const link = `http://localhost:5173/register?invitationCode=${user.referCode}`
  const copyToClipboard = (ordernum) => {
    navigator.clipboard.writeText(ordernum).then(() => {
      toast.success('Text copied to clipboard');
    }).catch(err => {
      toast.error('Failed to copy: ', err);
    });
  };
  useEffect(() => {
    dispatch(getreferUser())
    if (error) {
      toast.error(error)
      dispatch(clearErrors())
    }
  }, [dispatch, error])

  return (
    <>
      {loading && <Loading />}
    <div className="bg-[#22275b] text-black p-4  relative  z-50w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]  shadow-lg max-w-md mx-auto">
      {/* Header Section */}


      <div className="text-center mb-4">
        <h2 className="text-lg font-bold">Invite friends and deposit</h2>
        <p className="text-sm text-black">
          Both parties can receive rewards
          <br />
          Invite friends to register and recharge to receive rewards
        </p>
        <p className="text-sm text-gray-500">
          activity date
          <br />
          <span className="font-bold">2023-12-18 - 2024-12-30</span>
        </p>
      </div>


      {/* Tabs Section */}
      <div className="flex justify-around   rounded-xl  overflow-hidden  mb-4">
        <Link to={"InvitationRewardRules"} className="text-blue-500    text-center py-2 bg-[#374992] h-full w-[50%] font-bold">reward rules</Link>
        <hr className='border-y w-1 border-transparent   h-full' />
        <Link to={"InvitationRecord"} className="text-blue-500 text-center   py-2 bg-[#374992] h-full w-[50%] font-bold">Invitation record</Link>
      </div>

      <div className='flex flex-col w-full rounded-lg mb-3 text-white  p-3 bg-[#374992] '>
        <h1 className='text-[1.1rem] font-medium'>invitation Link --&gt; </h1>
        <div className='flex relative'>
          <input type="text" disabled value={link} className="bg-[#313672] text-white p-2 rounded-md  text-[0.9rem] pr-[2.5rem] focus:outline-none w-full" />
          <button className=' absolute right-1  text-[1.5rem] top-2 ' onClick={() => copyToClipboard(link)}>
            <HiOutlineClipboardDocumentCheck />
          </button>
        </div>
      </div>

      {/* Bonus Cards Section */}
      <div className="space-y-4">
        {[
          { id: 1, reward: 25.0, invitees: 1, deposit: 1, amount: 200 },
          { id: 2, reward: 100.0, invitees: 3, deposit: 3, amount: 200 },
          { id: 3, reward: 555.0, invitees: 10, deposit: 10, amount: 500 },
          { id: 4, reward: 1555.0, invitees: 30, deposit: 30, amount: 500 },
          { id: 5, reward: 3555.0, invitees: 70, deposit: 70, amount: 500 },
          { id: 6, reward: 5555.0, invitees: 100, deposit: 100, amount: 500 },
        ].map((bonus) => (
          <div
            key={bonus.id}
            className="bg-[#374992]  text-white p-4 rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                  Bonus {bonus.id}
                </span>
              </div>
              <div className="text-orange-500 font-bold">
                ₹{bonus.reward.toFixed(2)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 text-center">
              <div>
                <p className="text-sm">Number of invitees</p>
                <p className="font-bold">{bonus.invitees}</p>
              </div>
              <div>
                <p className="text-sm">Recharge per people</p>
                <p className="font-bold">₹{bonus.amount}.00</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 text-center">
              <div>
                <p className="text-red-500">{referUserDetails ? referUserDetails.totalInvitedUsers : 0} / {bonus.invitees}</p>
                <p className="text-xs text-gray-500">Number of invitees</p>
              </div>
              <div>
                <p className="text-red-500">{bonus.amount===200 && referUserDetails ?referUserDetails.depositCountfor200 :bonus.amount===500 && referUserDetails ?referUserDetails.depositCountfor500 : 0 } / {bonus.deposit}</p>
                <p className="text-xs text-gray-500">Deposit number</p>
              </div>
            </div>

            <div className="text-center mt-4">
              <button className="bg-gray-400 text-white px-4 py-2 rounded-full cursor-not-allowed">
                Unfinished
              </button>
            </div>
          </div>
        ))}

      </div>
      <div className='mb-[5rem]'></div>
    </div>
    </>
  );
};

export default InvitationBonus;
