import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getreferUserDepositDetails } from '../../../redux/actions/PaymentAciton';

const InvitationRecord = () => {
  const dispatch = useDispatch()
  const { Userdepositdetails, loading, error } = useSelector(
    (state) => state.referUser
  );

  useEffect(()=>{
    dispatch(getreferUserDepositDetails())

  },[dispatch])
    // Empty array to simulate no records

  return (
    <div className="flex relative    items-center justify-center    min-h-screen      bg-gray-400">

      <div className=" py-8  pt-0  bg-[#22275b]    min-h-screen    w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]        ">
        <h2 className="text-[1.2rem] text-white  font-serif w-full text-center font-semibold mb-4">Invitation record</h2>
        {Userdepositdetails && Userdepositdetails.length > 0 ? (
          Userdepositdetails.map((details, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <p>{details}</p>
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
