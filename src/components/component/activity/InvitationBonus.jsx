import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineClipboardDocumentCheck } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { claimUserreward, clearErrors, getreferUser } from '../../../redux/actions/PaymentAciton';
import Loading from '../Loading';

const InvitationBonus = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { message, error: error2, loading: loading2 } = useSelector((state) => state.payment);
  const { referUserDetails, loading, error } = useSelector((state) => state.referUser);
 
  // Local loading state to manage loading of the bonus claim
  const [claimLoading, setClaimLoading] = useState(false);

  const handleBonusOnClick = async (amount, invitedUsersDeposit, totalInvitedUsers, rewardAmount) => {
    setClaimLoading(true); // Set local loading to true when the claim starts
     
    try {
      // First dispatch: claim reward
      await dispatch(claimUserreward({ amount, invitedUsersDeposit, totalInvitedUsers, rewardAmount }));

      // Second dispatch: get updated refer user details
      await dispatch(getreferUser());
    } catch (error) {
      toast.error("Error in claiming bonus");
    } finally {
      setClaimLoading(false); // Stop local loading after completion
    }
  };

  const link = `https://reddotreal.netlify.app/register?invitationCode=${user.referCode}`;

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success('Link copied to clipboard!'))
      .catch((err) => toast.error(`Failed to copy: ${err}`));
  };

  useEffect(() => {
    if (error || error2) {
      toast.error(error || error2);
      dispatch(clearErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(clearErrors());
    }
  }, [dispatch, error, error2, message]);

  useEffect(() => {
    dispatch(getreferUser());
  }, [dispatch]);

  return (
    <div className=' bg-gray-400'>
      {(loading || loading2 || claimLoading) && <Loading />} {/* Show Loading during any process */}
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

        {/* Invitation Link Section */}
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
                  <p className="text-red-500">{referUserDetails && referUserDetails.totalInvitedUsers ? referUserDetails.totalInvitedUsers : 0} / {bonus.invitees}</p>
                  <p className="text-xs text-gray-500">Number of invitees</p>
                </div>
                <div>
                  <p className="text-red-500">{bonus.amount === 200 && referUserDetails && referUserDetails.depositCountfor200 ? referUserDetails.depositCountfor200 : bonus.amount === 500 && referUserDetails && referUserDetails.depositCountfor500 ? referUserDetails.depositCountfor500 : 0} / {bonus.deposit}</p>
                  <p className="text-xs text-gray-500">Deposit number</p>
                </div>
              </div>

              <div className="text-center mt-4">
                <button
                  disabled={bonus.amount === 200 && referUserDetails && referUserDetails.depositCountfor200 && referUserDetails.depositCountfor200 >= bonus.deposit && referUserDetails.totalInvitedUsers >= bonus.invitees ? false : bonus.amount === 500 && referUserDetails && referUserDetails.depositCountfor500 && referUserDetails.totalInvitedUsers >= bonus.invitees && referUserDetails.depositCountfor500 === bonus.deposit ? false : true}
                  onClick={() => handleBonusOnClick(bonus.amount, bonus.deposit, bonus.invitees , bonus.reward)} className={`${bonus.amount === 200 && referUserDetails && referUserDetails.depositCountfor200 && referUserDetails.depositCountfor200 >= bonus.deposit && referUserDetails.totalInvitedUsers >= bonus.invitees ? "bg-blue-500" : bonus.amount === 500 && referUserDetails && referUserDetails.depositCountfor500 && referUserDetails.totalInvitedUsers >= bonus.invitees && referUserDetails.depositCountfor500 === bonus.deposit ? " bg-blue-500" : "bg-gray-400 cursor-not-allowed"} text-white px-4 py-2 rounded-full `}>
                  Unfinished
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='mb-[5rem]'></div>
      </div>
    </div>
  );
};

export default InvitationBonus;
