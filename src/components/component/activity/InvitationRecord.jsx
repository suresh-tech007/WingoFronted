import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getreferUser } from '../../../redux/actions/PaymentAciton';
import Loading from '../Loading';

const InvitationRecord = () => {
  const dispatch = useDispatch()
  const { referUserDetails, loading, error } = useSelector(
    (state) => state.referUser
  );
   

  useEffect(()=>{
    dispatch(getreferUser())
  },[dispatch])
    // Empty array to simulate no records

  return (
    <div className="flex relative    items-center justify-center    min-h-screen      bg-gray-400">
{loading && <Loading />}
      <div className=" py-8  pt-0  bg-[#22275b]    min-h-screen    w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]        ">
        <h2 className="text-[1.2rem] text-white  font-serif w-full text-center font-semibold mb-4">Invitation record</h2>
        <div   className="bg-[#252a68] text-white flex itece  border-b-black border-b  justify-between p-4   font-semibold shadow-sm  ">
              <p>Username</p>
              <p>First Deposit</p>
            </div>
        {referUserDetails && referUserDetails.invitedUserdetails && referUserDetails.invitedUserdetails.length > 0 ? (
          referUserDetails.invitedUserdetails.map((details, index) => (
            <div key={index} className="bg-[#323b9a] text-white flex itece   justify-between p-4  border-b shadow-sm  ">
              <p>{details.invitedUsername}</p>
              <p>{details.amount}</p>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No more</div>
        )}
      </div>
    </div>
  );
};

export default InvitationRecord;
